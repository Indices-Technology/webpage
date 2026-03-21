import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, email, phone, subject, message, service } = body

  // Basic validation
  if (!name || !email || !message) {
    throw createError({ statusCode: 400, message: 'Name, email and message are required.' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: config.mailUser,
      pass: config.mailPass, // Must be a Gmail App Password, not your account password
    },
  })

  const serviceLabel = service ? `\nService Enquiry: ${service}` : ''
  const phoneLabel = phone ? `\nPhone: ${phone}` : ''

  await transporter.sendMail({
    from: `"${name}" <${config.mailUser}>`,
    replyTo: email,
    to: 'contactindices@gmail.com',
    subject: subject ? `[Indices] ${subject}` : `[Indices] New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}${phoneLabel}${serviceLabel}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px">
        <div style="background:#1e293b;padding:20px 24px;border-radius:8px;margin-bottom:24px">
          <h2 style="color:#fff;margin:0;font-size:20px;font-weight:900;letter-spacing:-0.5px">
            INDICES TECHNOLOGY LTD
          </h2>
          <p style="color:#94a3b8;margin:4px 0 0;font-size:12px">New contact form submission</p>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;width:30%">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px">${phone}</td>
          </tr>` : ''}
          ${service ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Service</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px">${service}</td>
          </tr>` : ''}
          ${subject ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Subject</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px">${subject}</td>
          </tr>` : ''}
        </table>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin-bottom:24px">
          <p style="color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 10px">Message</p>
          <p style="color:#0f172a;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
        </div>

        <p style="color:#94a3b8;font-size:11px;text-align:center;margin:0">
          Indices Technology LTD · RC7529506 · Plateau State, Nigeria
        </p>
      </div>
    `,
  })

  return { success: true }
})
