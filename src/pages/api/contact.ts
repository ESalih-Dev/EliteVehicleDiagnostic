import type { APIRoute } from 'astro'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { MANUFACTURERS } from '@/components/contact/manufacturerField'

const ContactSchema = zfd.formData({
  fullName: z
    .string()
    .min(3, {
      message: 'Please include a name longer than 2 characters'
    })
    .max(100, {
      message: "You've got a long name! How about something shorter - like a nickname?"
    }),
  email: z.string().email(),
  phone: z.string().optional(),
  make: z.enum(MANUFACTURERS),
  model: z.string().max(100).optional(),
  description: z
    .string()
    .min(20, {
      message: 'Please go into a bit more detail than that :)'
    })
    .max(500, {
      message: 'Looks like the '
    })
})

type Contact = z.infer<typeof ContactSchema>

const sendEmail = async ({ fullName, email, phone, make, model, description }: Contact) => {
  console.log('SENDING EMAIL...')
  const DOMAIN_NAME = import.meta.env.MAILGUN_DOMAIN_NAME
  const API_KEY = import.meta.env.MAILGUN_API_KEY
  console.log({
    DOMAIN_NAME,
    API_KEY
  })
  const response = await fetch(`https://api.mailgun.net/v3/${DOMAIN_NAME}.mailgun.org/messages`, {
    method: 'post',
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${API_KEY}`).toString('base64')}`
    },
    body: new URLSearchParams({
      from: `"${fullName}" <${email}>`,
      to: '"Salih Ahmet" <elitevehiclediagnostic@gmail.com>',
      subject: `Support request for ${make}${model ? ` ${model}` : ''}`,
      text: description,
      html: `
          <h2>New message from ${fullName}</h2>
          ${email && `<p><b>Email:</b> ${email}</p>`}
          ${phone && `<p><b>Contact number:</b> ${phone}</p>`}
          <p style="white-space: break-spaces">${description}</p>
        `
    })
  })
  if (!response.ok) {
    console.log(await response)
    return false
  }
  return true
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const safeParse = ContactSchema.safeParse(data)
  if (safeParse.success) {
    const success = await sendEmail(safeParse.data)
    return new Response(
      JSON.stringify({
        message: 'Success!'
      }),
      { status: 200 }
    )
  } else {
    console.log('HERE')
    return new Response(
      JSON.stringify({
        message: safeParse.error
      }),
      { status: 400 }
    )
  }
}
