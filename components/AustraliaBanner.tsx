import Link from 'next/link'

export default function AustraliaBanner() {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 py-12">
      <div className="absolute inset-0 bg-[url('/Landing Page background image for the first header tile.png')] bg-cover bg-center opacity-5" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="rounded-full bg-yellow-400/20 border border-yellow-400/30 px-5 py-2 text-sm font-bold text-yellow-100 backdrop-blur">
                NEW MARKET LAUNCH 2026
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Montage Australia 🇦🇺
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 max-w-3xl mb-3 leading-relaxed">
              Middle Eastern Urea for Australian Agriculture
            </p>
            <p className="text-base text-white/80 max-w-2xl mb-8">
              2 Million MT annual volume • 250k MT consignment programs • CFR bulk cargoes at competitive pricing
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-3xl">
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur p-4">
                <div className="text-2xl font-black text-yellow-300">46% N</div>
                <div className="text-xs text-white/80 mt-1">Urea</div>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur p-4">
                <div className="text-2xl font-black text-yellow-300">DAWE</div>
                <div className="text-xs text-white/80 mt-1">Certified</div>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur p-4">
                <div className="text-2xl font-black text-yellow-300">ME Origin</div>
                <div className="text-xs text-white/80 mt-1">Middle East</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/marketing/australia"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-base font-bold text-neutral-900 hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl"
              >
                <span>Explore Australia Program</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://calendly.com/zakiullah-montageoil/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
