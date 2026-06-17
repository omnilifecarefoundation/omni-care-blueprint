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
  const res = await fetch('/api/public/forms/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...input,
      pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    }),
  })
  if (!res.ok) {
    let msg = 'Submission failed'
    try {
      const data = await res.json()
      if (data?.error) msg = data.error
    } catch {
      // ignore
    }
    throw new Error(msg)
  }
}
