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

const LOVABLE_FORM_ENDPOINT = 'https://omni-care-blueprint.lovable.app/api/public/forms/submit'

async function postSubmission(url: string, payload: SubmitFormInput & { pageUrl?: string }) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

export async function submitForm(input: SubmitFormInput): Promise<void> {
  const payload = {
    ...input,
    pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
  }

  let res = await postSubmission('/api/public/forms/submit', payload)

  if (!res.ok && typeof window !== 'undefined' && !window.location.hostname.endsWith('.lovable.app')) {
    res = await postSubmission(LOVABLE_FORM_ENDPOINT, payload)
  }

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
