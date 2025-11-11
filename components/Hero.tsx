import Link from 'next/link'
import Image from 'next/image'
import { ButtonPrimary, ButtonSecondary } from './Button'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/Landing Page background image for the first header tile.png"
        alt="Background – vessel at sea"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-brand-800/20 to-transparent" />
      <div className="relative container px-6 py-20 text-white md:py-28 min-h-[56vh] md:min-h-[66vh] flex flex-col justify-center">
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
        <div id="kpi" className="mt-10 grid gap-3 sm:grid-cols-3">
          {[ 'Integrated origination', 'Logistics certainty', 'Safety-first operations' ].map((t) => (
            <div key={t} className="rounded-xl border border-white/20 bg-white/10 p-4 text-white/90">
              {t}
            </div>
          ))}
        </div>
        <a href="#kpi" aria-label="Go to next section" className="group absolute bottom-6 right-6 inline-flex items-center justify-center rounded-full bg-brand-600 p-3 text-white shadow-card hover:bg-brand-700 focus-visible:shadow-focus">
          <Image src="/ship.svg" alt="" width={20} height={20} className="opacity-90 transition group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
