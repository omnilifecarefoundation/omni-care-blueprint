import * as React from 'react'
import { render } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'Omni Life Care Foundation'
const SENDER_DOMAIN = 'notify.omnilifecare.org'
const FROM_DOMAIN = 'notify.omnilifecare.org'
const LOVABLE_FORM_ENDPOINT = 'https://omni-care-blueprint.lovable.app/api/public/forms/submit'

const FieldSchema = z.object({
  label: z.string().trim().min(1).max(80),
  value: z.string().trim().max(5000),
})

const BodySchema = z.object({
  formName: z.string().trim().min(1).max(80),
  replyTo: z.string().trim().email().max(254).optional().or(z.literal('')),
  pageUrl: z.string().trim().max(500).optional(),
  fields: z.array(FieldSchema).min(1).max(20),
  // honeypot
  website: z.string().max(0).optional(),
})

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function shouldUseFallback(request: Request): boolean {
  try {
    const host = new URL(request.url).hostname
    return !host.endsWith('.lovable.app') && !host.endsWith('.lovableproject.com')
  } catch {
    return true
  }
}

async function forwardToLovableBackend(body: unknown) {
  const response = await fetch(LOVABLE_FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    console.error('Fallback form submission failed', { status: response.status })
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }

  return Response.json({ success: true })
}

export const Route = createFileRoute('/api/public/forms/submit')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let rawBody: unknown
        try {
          rawBody = await request.json()
        } catch (err) {
          return Response.json(
            { error: 'Invalid submission', details: err instanceof Error ? err.message : 'Invalid' },
            { status: 400 },
          )
        }

        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        const supabaseUrl = process.env.SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL
        if (!supabaseUrl || !supabaseServiceKey) {
          if (shouldUseFallback(request)) {
            return forwardToLovableBackend(rawBody)
          }
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let parsed
        try {
          parsed = BodySchema.parse(rawBody)
        } catch (err) {
          return Response.json(
            { error: 'Invalid submission', details: err instanceof Error ? err.message : 'Invalid' },
            { status: 400 },
          )
        }

        // Honeypot: silently succeed
        if (parsed.website && parsed.website.length > 0) {
          return Response.json({ success: true })
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        const template = TEMPLATES['form-notification']
        if (!template) {
          return Response.json({ error: 'Template missing' }, { status: 500 })
        }
        const recipients = Array.isArray(template.to)
          ? template.to
          : [template.to!]

        const templateData = {
          formName: parsed.formName,
          replyTo: parsed.replyTo || undefined,
          pageUrl: parsed.pageUrl,
          submittedAt: new Date().toUTCString(),
          fields: parsed.fields,
        }

        const element = React.createElement(template.component, templateData)
        const html = await render(element)
        const plainText = await render(element, { plainText: true })
        const subject =
          typeof template.subject === 'function'
            ? template.subject(templateData)
            : template.subject

        let anyFailed = false
        for (const recipient of recipients) {
          const normalizedEmail = recipient.toLowerCase()
          const messageId = crypto.randomUUID()

          // Ensure unsubscribe token (required by queue dispatcher)
          let unsubscribeToken: string | undefined
          const { data: existingToken } = await supabase
            .from('email_unsubscribe_tokens')
            .select('token, used_at')
            .eq('email', normalizedEmail)
            .maybeSingle()
          if (existingToken?.token && !existingToken.used_at) {
            unsubscribeToken = existingToken.token
          } else if (!existingToken) {
            unsubscribeToken = generateToken()
            await supabase
              .from('email_unsubscribe_tokens')
              .upsert(
                { token: unsubscribeToken, email: normalizedEmail },
                { onConflict: 'email', ignoreDuplicates: true },
              )
            const { data: stored } = await supabase
              .from('email_unsubscribe_tokens')
              .select('token')
              .eq('email', normalizedEmail)
              .maybeSingle()
            if (stored?.token) unsubscribeToken = stored.token
          }

          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: 'form-notification',
            recipient_email: recipient,
            status: 'pending',
          })

          const { error: enqueueError } = await supabase.rpc('enqueue_email', {
            queue_name: 'transactional_emails',
            payload: {
              message_id: messageId,
              to: recipient,
              from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
              sender_domain: SENDER_DOMAIN,
              subject,
              html,
              text: plainText,
              purpose: 'transactional',
              label: 'form-notification',
              idempotency_key: messageId,
              unsubscribe_token: unsubscribeToken,
              reply_to: parsed.replyTo || undefined,
              queued_at: new Date().toISOString(),
            },
          })

          if (enqueueError) {
            anyFailed = true
            console.error('Failed to enqueue form notification', enqueueError)
            await supabase.from('email_send_log').insert({
              message_id: messageId,
              template_name: 'form-notification',
              recipient_email: recipient,
              status: 'failed',
              error_message: 'Failed to enqueue',
            })
          }
        }

        if (anyFailed) {
          if (shouldUseFallback(request)) {
            return forwardToLovableBackend(rawBody)
          }
          return Response.json({ error: 'Failed to send' }, { status: 500 })
        }

        return Response.json({ success: true })
      },

    },
  },
})
