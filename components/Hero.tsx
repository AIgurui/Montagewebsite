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
      <div className="relative container px-4 py-16 text-white sm:px-6 md:py-28 min-h-[60vh] md:min-h-[66vh] flex flex-col justify-center">
        <h1 className="max-w-3xl font-inter text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Global Fertilizer Trading
        </h1>
        <p className="mt-3 md:mt-4 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
          Global trading with local execution — we manage complex supply chains and deliver tailor‑made solutions with disciplined risk and transparent operations.
        </p>
        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/marketing/contact"><ButtonPrimary>Start a conversation</ButtonPrimary></Link>
          <Link href="/marketing/fertilizers"><ButtonSecondary>Explore fertilizers</ButtonSecondary></Link>
        </div>
        <div id="kpi" className="mt-8 md:mt-10 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-3">
          {[ 'Integrated origination', 'Logistics certainty', 'Safety-first operations' ].map((t) => (
            <div key={t} className="rounded-lg sm:rounded-xl border border-white/20 bg-white/10 p-3 sm:p-4 text-sm sm:text-base text-white/90 text-center sm:text-left">
              {t}
            </div>
          ))}
        </div>
        <a href="#kpi" aria-label="Go to next section" className="group absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 inline-flex items-center justify-center rounded-full bg-brand-600 p-2 sm:p-2.5 md:p-3 text-white shadow-lg hover:bg-brand-700 focus-visible:shadow-focus transition-all hover:scale-110">
          <Image src="/ship.svg" alt="" width={20} height={20} className="opacity-90 transition group-hover:translate-y-0.5 w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </section>
  )
}
