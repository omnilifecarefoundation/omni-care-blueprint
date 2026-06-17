import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface FormField {
  label: string
  value: string
}

interface Props {
  formName?: string
  pageUrl?: string
  submittedAt?: string
  replyTo?: string
  fields?: FormField[]
}

const Email = ({
  formName = 'Website form',
  pageUrl,
  submittedAt,
  replyTo,
  fields = [],
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New ${formName} submission${replyTo ? ` from ${replyTo}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>Omni Life Care Foundation</Text>
          <Heading style={h1}>New {formName} submission</Heading>
          <Text style={muted}>
            {submittedAt ? `Received ${submittedAt}` : 'A new enquiry has just come in.'}
          </Text>
        </Section>

        <Hr style={hr} />

        <Section>
          {fields.map((f, i) => (
            <Section key={i} style={row}>
              <Text style={fieldLabel}>{f.label}</Text>
              <Text style={fieldValue}>{f.value || '—'}</Text>
            </Section>
          ))}
        </Section>

        {pageUrl && (
          <>
            <Hr style={hr} />
            <Text style={meta}>Submitted from: {pageUrl}</Text>
          </>
        )}
        {replyTo && (
          <Text style={meta}>
            Reply directly to this enquirer: <strong>{replyTo}</strong>
          </Text>
        )}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `[Omni Life Care] New ${data?.formName ?? 'website'} submission${
      data?.replyTo ? ` — ${data.replyTo}` : ''
    }`,
  displayName: 'Form submission notification',
  to: 'info@omnilifecare.org',
  previewData: {
    formName: 'Contact',
    pageUrl: 'https://omnilifecare.org/contact',
    submittedAt: new Date().toISOString(),
    replyTo: 'jane@example.com',
    fields: [
      { label: 'Name', value: 'Jane Doe' },
      { label: 'Email', value: 'jane@example.com' },
      { label: 'Topic', value: 'CSR partnership' },
      { label: 'Message', value: 'We would like to explore a partnership.' },
    ],
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  color: '#0F1117',
}
const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '32px 24px',
}
const header = { marginBottom: '8px' }
const brand = {
  fontSize: '12px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#6B7280',
  margin: '0 0 12px 0',
}
const h1 = {
  fontSize: '22px',
  lineHeight: '1.25',
  fontWeight: 600,
  color: '#0F1117',
  margin: '0 0 6px 0',
}
const muted = { fontSize: '14px', color: '#6B7280', margin: '0' }
const hr = { borderColor: '#E5E7EB', margin: '24px 0' }
const row = { marginBottom: '16px' }
const fieldLabel = {
  fontSize: '11px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: '#6B7280',
  margin: '0 0 4px 0',
}
const fieldValue = {
  fontSize: '15px',
  lineHeight: '1.5',
  color: '#0F1117',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}
const meta = { fontSize: '13px', color: '#6B7280', margin: '8px 0 0 0' }
