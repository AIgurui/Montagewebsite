import Link from 'next/link'
import { ButtonPrimary, ButtonSecondary } from './Button'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600" />
      <div className="relative container px-6 py-20 text-white md:py-28">
        <h1 className="max-w-3xl font-inter text-4xl font-black leading-tight md:text-6xl">
          Fertilizers. <span className="text-white/90">Intelligence.</span> Reach.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Global trading with local execution — we manage complex supply chains and deliver tailor‑made solutions with disciplined risk and transparent operations.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/marketing/contact"><ButtonPrimary>Start a conversation</ButtonPrimary></Link>
          <Link href="/marketing/fertilizers"><ButtonSecondary>Explore fertilizers</ButtonSecondary></Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[ 'Integrated origination', 'Logistics certainty', 'Safety-first operations' ].map((t) => (
            <div key={t} className="rounded-xl border border-white/20 bg-white/10 p-4 text-white/90">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
