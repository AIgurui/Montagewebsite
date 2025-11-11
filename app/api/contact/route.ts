import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'

const rate: Map<string, { count: number; ts: number }> = new Map()

export async function POST(req: NextRequest) {
  const data = await req.formData()
  const name = String(data.get('name') || '')
  const email = String(data.get('email') || '')
  const company = String(data.get('company') || '')
  const message = String(data.get('message') || '')
  const honeypot = String(data.get('website') || '')

  if (honeypot) return NextResponse.json({ ok: true })
  if (!name || !email || !message) return NextResponse.json({ ok: false }, { status: 400 })

  const ip = req.headers.get('x-forwarded-for') || 'local'
  const now = Date.now()
  const prev = rate.get(ip) || { count: 0, ts: now }
  const withinMinute = now - prev.ts < 60_000
  const count = withinMinute ? prev.count + 1 : 1
  rate.set(ip, { count, ts: withinMinute ? prev.ts : now })
  if (count > 5) return NextResponse.json({ ok: false }, { status: 429 })

  await sendMail({ subject: `Website inquiry from ${name}`, text: `${name} <${email}> (${company})\n\n${message}` })
  return NextResponse.json({ ok: true })
}

