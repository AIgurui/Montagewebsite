import Section from '@/components/Section'
import Link from 'next/link'

export const metadata = {
  title: 'Fertilizers',
  description: 'Full-line portfolio across nitrogen, phosphate, potash and key raw materials.',
}

const nitrogenProducts = [
  { name: 'Ammonium Sulphate', desc: '21% nitrogen, 24% sulphur for efficient crop nutrition' },
  { name: 'Ammonia', desc: '82% nitrogen, foundational feedstock for nitrogen fertilizers' },
]

const phosphateProducts = [
  { name: 'MAP', desc: 'Monoammonium Phosphate - 11-52-0 NPK ratio' },
  { name: 'DAP', desc: 'Diammonium Phosphate - 18-46-0 NPK ratio' },
  { name: 'TSP', desc: 'Triple Superphosphate - concentrated phosphorus' },
  { name: 'SSP', desc: 'Single Superphosphate - phosphorus with sulphur' },
  { name: 'Phosphoric Acid', desc: 'Key raw material for phosphate fertilizers' },
]

const potashProducts = [
  { name: 'MOP', desc: 'Muriate of Potash - high potassium chloride content' },
  { name: 'SOP', desc: 'Sulphate of Potash - premium chloride-free potassium' },
]

export default function Page() {
  return (
    <>
      <Section id="fertilizers-intro" eyebrow="Fertilizers" title="Integrated portfolio and market access">
        <p className="text-lg text-neutral-700">
          Full-line portfolio across nitrogen, phosphate, potash and key raw materials. From origination to delivery, we provide certainty in volatile markets.
        </p>
      </Section>

      {/* Featured Product: Urea */}
      <section className="relative pb-12">
        <div className="container">
          <Link
            href="/marketing/fertilizers/urea"
            className="group relative block overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-teal-50 p-8 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-100/50 to-transparent" />
            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold text-white">
                <span>★</span>
                FEATURED PRODUCT
              </div>
              <h2 className="mb-3 text-4xl font-bold text-brand-900">Urea</h2>
              <p className="mb-4 max-w-2xl text-lg text-neutral-700">
                46% nitrogen content. The world&apos;s most widely used solid nitrogen fertilizer.
                Australian focus with direct origination from China, Indonesia, and Middle East.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="rounded-lg bg-white/80 px-4 py-2 text-sm">
                  <div className="font-semibold text-brand-700">46% N</div>
                  <div className="text-xs text-neutral-600">Nitrogen content</div>
                </div>
                <div className="rounded-lg bg-white/80 px-4 py-2 text-sm">
                  <div className="font-semibold text-brand-700">Prilled & Granular</div>
                  <div className="text-xs text-neutral-600">Multiple forms</div>
                </div>
                <div className="rounded-lg bg-white/80 px-4 py-2 text-sm">
                  <div className="font-semibold text-brand-700">Australia Focus</div>
                  <div className="text-xs text-neutral-600">Primary market</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-brand-600 font-semibold group-hover:gap-3 transition-all">
                Explore Urea Program
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Nitrogen Products */}
      <section className="relative pb-12">
        <div className="container">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-900">Nitrogen Products</h3>
            <p className="text-neutral-600">Essential for protein synthesis and chlorophyll production</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {nitrogenProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-300">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                    <span className="text-xl">🌱</span>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">{product.name}</h4>
                </div>
                <p className="text-sm text-neutral-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phosphate Products */}
      <section className="relative pb-12">
        <div className="container">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-900">Phosphate Products</h3>
            <p className="text-neutral-600">Critical for root development and energy transfer</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {phosphateProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">{product.name}</h4>
                </div>
                <p className="text-sm text-neutral-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potash Products */}
      <section className="relative pb-20">
        <div className="container">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-900">Potash Products</h3>
            <p className="text-neutral-600">Vital for water regulation and disease resistance</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {potashProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-300">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                    <span className="text-xl">💧</span>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">{product.name}</h4>
                </div>
                <p className="text-sm text-neutral-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

