import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { M as MANUFACTURERS } from './contact_EqJhWOuF.mjs';

const ContactSchema = zfd.formData({
  fullName: z.string().min(3, {
    message: "Please include a name longer than 2 characters"
  }).max(100, {
    message: "You've got a long name! How about something shorter - like a nickname?"
  }),
  email: z.string().email(),
  phone: z.string().optional(),
  make: z.enum(MANUFACTURERS),
  model: z.string().max(100).optional(),
  description: z.string().min(20, {
    message: "Please go into a bit more detail than that :)"
  }).max(500, {
    message: "Looks like the "
  })
});
const sendEmail = async ({ fullName, email, phone, make, model, description }) => {
  const DOMAIN_NAME = process.env.MAILGUN_DOMAIN_NAME;
  const API_KEY = process.env.MAILGUN_API_KEY;
  const response = await fetch(`https://api.mailgun.net/v3/${DOMAIN_NAME}.mailgun.org/messages`, {
    method: "post",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${API_KEY}`).toString("base64")}`
    },
    body: new URLSearchParams({
      from: `"${fullName}" <${email}>`,
      to: '"Salih Ahmet" <elitevehiclediagnostic@gmail.com>',
      subject: `Support request for ${make}${model ? ` ${model}` : ""}`,
      text: description,
      html: `
          <h2>New message from ${fullName}</h2>
          ${email && `<p><b>Email:</b> ${email}</p>`}
          ${phone && `<p><b>Contact number:</b> ${phone}</p>`}
          <p style="white-space: break-spaces">${description}</p>
        `
    })
  });
  if (!response.ok) {
    return false;
  }
  return true;
};
const POST = async ({ request }) => {
  const data = await request.formData();
  const safeParse = ContactSchema.safeParse(data);
  if (safeParse.success) {
    await sendEmail(safeParse.data);
    return new Response(JSON.stringify({ message: "Success!" }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ message: safeParse.error }), { status: 400 });
  }
};

export { POST };
