import Section from '@/components/Section'
import { site } from '@/lib/config'

export const metadata = { title: 'Contact' }

export default function Page() {
  return (
    <>
      <Section eyebrow="Contact" title="Let’s build a trade together">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <form action="/api/contact" method="post" className="grid gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <input type="text" name="name" placeholder="Name" required className="rounded-md border border-white/10 bg-black/40 p-3" />
              <input type="email" name="email" placeholder="Email" required className="rounded-md border border-white/10 bg-black/40 p-3" />
              <input type="text" name="company" placeholder="Company" className="rounded-md border border-white/10 bg-black/40 p-3" />
              <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />
              <textarea name="message" placeholder="Message" rows={6} className="rounded-md border border-white/10 bg-black/40 p-3" />
              <button className="rounded-full bg-brand px-5 py-3 font-medium text-black" type="submit">Send</button>
              <p className="text-xs text-slate-400">We respond within one business day.</p>
            </form>
          </div>
          <div className="space-y-2 text-slate-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-white">Address</div>
              <div>{site.address}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-white">Email</div>
              <a className="text-brand" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <img alt="Map placeholder" src="/map.png" className="w-full rounded-xl border border-white/10" />
          </div>
        </div>
      </Section>
    </>
  )
}

