import Section from '@/components/Section'
import Link from 'next/link'

export const metadata = {
  title: 'Fertilizers',
  description: 'Full-line portfolio across nitrogen, phosphate, potash and key raw materials.',
}

const nitrogenProducts = [
  'Ammonium Sulphate',
  'Ammonium Nitrate',
  'LD Ammonium Nitrate',
  'CAN',
  'UAN',
  'NPK',
  'Ammonia',
  'Sulphur',
  'Sulfuric Acid',
]

const potashProducts = [
  'MOP',
  'SOP',
]

const phosphateProducts = [
  'MAP',
  'DAP',
  'TSP',
  'SSP',
  'NPs',
  'Phosphate Rock',
  'Phosphoric Acid',
]

export default function Page() {
  return (
    <>
      <Section id="fertilizers-intro" eyebrow="Fertilizers" title="Integrated portfolio and market access">
        <p className="text-lg !text-black">
          Full-line portfolio across nitrogen, phosphate, potash and key raw materials. From origination to delivery, we provide certainty in volatile markets.
        </p>
      </Section>

      {/* Urea - Main Annual Product */}
      <section className="relative pb-6 md:pb-8">
        <div className="container px-4">
          <Link
            href="/marketing/fertilizers/urea"
            className="group relative block overflow-hidden rounded-xl md:rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-teal-50 p-6 sm:p-8 md:p-10 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-100/50 to-transparent" />
            <div className="relative">
              <h2 className="mb-3 md:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-900">Urea</h2>
              <p className="mb-4 md:mb-6 max-w-2xl text-base sm:text-lg md:text-xl !text-black">
                The world&apos;s most widely used solid nitrogen fertilizer.
              </p>
              <div className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm sm:text-base md:text-lg group-hover:gap-3 transition-all">
                Explore Urea Program
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Nitrogen */}
      <section className="relative pb-6 md:pb-8">
        <div className="container px-4">
          <div className="mb-3 md:mb-4">
            <h3 className="text-xl md:text-2xl font-bold !text-black">Nitrogen</h3>
            <p className="text-sm md:text-base !text-black">Essential for protein synthesis and chlorophyll production</p>
          </div>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3">
            {nitrogenProducts.map((product) => (
              <div key={product} className="group rounded-lg md:rounded-xl border border-neutral-200 bg-white p-4 md:p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-300">
                <h4 className="text-base md:text-lg font-semibold !text-black">{product}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potash */}
      <section className="relative pb-6 md:pb-8">
        <div className="container px-4">
          <div className="mb-3 md:mb-4">
            <h3 className="text-xl md:text-2xl font-bold !text-black">Potash</h3>
            <p className="text-sm md:text-base !text-black">Vital for water regulation and disease resistance</p>
          </div>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
            {potashProducts.map((product) => (
              <div key={product} className="group rounded-lg md:rounded-xl border border-neutral-200 bg-white p-4 md:p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-300">
                <h4 className="text-base md:text-lg font-semibold !text-black">{product}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phosphate */}
      <section className="relative pb-8 md:pb-12">
        <div className="container px-4">
          <div className="mb-3 md:mb-4">
            <h3 className="text-xl md:text-2xl font-bold !text-black">Phosphate</h3>
            <p className="text-sm md:text-base !text-black">Critical for root development and energy transfer</p>
          </div>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3">
            {phosphateProducts.map((product) => (
              <div key={product} className="group rounded-lg md:rounded-xl border border-neutral-200 bg-white p-4 md:p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300">
                <h4 className="text-base md:text-lg font-semibold !text-black">{product}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
