import Link from 'next/link'
import Image from 'next/image'
import { ButtonPrimary, ButtonSecondary } from '../Button'

export default function UreaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600">
      <div className="absolute inset-0 bg-[url('/Landing Page background image for the first header tile.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-brand-800/60 to-transparent" />

      <div className="relative container px-6 py-20 text-white md:py-28 min-h-[60vh] flex flex-col justify-center">
        <div className="inline-block mb-4">
          <span className="rounded-full bg-yellow-400/20 border border-yellow-400/30 px-4 py-1.5 text-sm font-semibold text-yellow-100">
            🇦🇺 Australia 2026 Launch
          </span>
        </div>

        <h1 className="max-w-4xl font-inter text-4xl font-black leading-tight md:text-6xl">
          Premium Middle Eastern Urea for Australian Agriculture
        </h1>

        <p className="mt-4 max-w-2xl text-xl text-white/90 leading-relaxed">
          2 Million MT annual trading volume. Flexible consignment programs. DAWE biosecurity compliant supply chain from Dubai to Australian ports.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="#urea-focus">
            <ButtonPrimary className="text-lg px-8 py-4">Configure Your Program</ButtonPrimary>
          </Link>
          <a href="/brochure/Montage_Oil_DMCC_Company_Profile_2025.pdf" target="_blank" rel="noopener noreferrer">
            <ButtonSecondary className="text-lg px-8 py-4">Download Technical Specs</ButtonSecondary>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-3xl">
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
            <div className="text-3xl font-black text-yellow-300">2M MT</div>
            <div className="text-sm text-white/80 mt-1">Annual Urea Volume</div>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
            <div className="text-3xl font-black text-yellow-300">250k MT</div>
            <div className="text-sm text-white/80 mt-1">Consignment Capacity</div>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
            <div className="text-3xl font-black text-yellow-300">ME Origin</div>
            <div className="text-sm text-white/80 mt-1">Premium Suppliers</div>
          </div>
        </div>

        <a href="#urea-focus" aria-label="Scroll to urea details" className="group absolute bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center justify-center rounded-full bg-yellow-400 p-2.5 md:p-3 text-brand-900 shadow-lg hover:bg-yellow-300 focus-visible:shadow-focus transition-all hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition group-hover:translate-y-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
