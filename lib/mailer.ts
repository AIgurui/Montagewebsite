type Mail = { subject: string; text: string }

export async function sendMail(mail: Mail) {
  // Placeholder: integrate Resend or SMTP here. Keeping a no-op for now.
  console.log('MAIL:', mail.subject)
}

