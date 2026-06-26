import { supabase } from '@/integrations/supabase/client'

export interface FormField {
  label: string
  value: string
}

export interface SubmitFormInput {
  formName: string
  replyTo?: string
  fields: FormField[]
  /** Honeypot — leave empty */
  website?: string
}

export async function submitForm(input: SubmitFormInput): Promise<void> {
  const payload = {
    ...input,
    pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
  }

  const { data, error } = await supabase.functions.invoke('submit-form', {
    body: payload,
  })

  if (error) {
    const msg = (data as any)?.error || error.message || 'Submission failed'
    throw new Error(msg)
  }
  if (data && (data as any).error) {
    throw new Error((data as any).error)
  }
}
