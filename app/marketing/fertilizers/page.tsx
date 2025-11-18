import Section from '@/components/Section'
import Link from 'next/link'

export const metadata = {
  title: 'Fertilizers',
  description: 'Full-line portfolio across nitrogen, phosphate, potash and key raw materials.',
}

const nitrogenProducts = [
  { name: 'Ammonium Sulphate', desc: '21% nitrogen, 24% sulphur for efficient crop nutrition' },
  { name: 'Ammonium Nitrate', desc: 'High nitrogen content for rapid crop response' },
  { name: 'LD Ammonium Nitrate', desc: 'Low density formulation for specialized applications' },
  { name: 'CAN', desc: 'Calcium Ammonium Nitrate - nitrogen with calcium for soil health' },
  { name: 'UAN', desc: 'Urea Ammonium Nitrate solution for liquid applications' },
  { name: 'NPK', desc: 'Balanced nitrogen-phosphorus-potassium compound fertilizers' },
  { name: 'Ammonia', desc: '82% nitrogen, foundational feedstock for nitrogen fertilizers' },
  { name: 'Sulphur', desc: 'Essential nutrient and raw material for fertilizer production' },
  { name: 'Sulfuric Acid', desc: 'Key raw material for phosphate fertilizer manufacturing' },
]

const potashProducts = [
  { name: 'MOP', desc: 'Muriate of Potash - high potassium chloride content' },
  { name: 'SOP', desc: 'Sulphate of Potash - premium chloride-free potassium' },
]

const phosphateProducts = [
  { name: 'MAP', desc: 'Monoammonium Phosphate - 11-52-0 NPK ratio' },
  { name: 'DAP', desc: 'Diammonium Phosphate - 18-46-0 NPK ratio' },
  { name: 'TSP', desc: 'Triple Superphosphate - concentrated phosphorus source' },
  { name: 'SSP', desc: 'Single Superphosphate - phosphorus with sulphur' },
  { name: 'NPs', desc: 'Nitrogen-Phosphorus compound fertilizers' },
  { name: 'Phosphate Rock', desc: 'Raw material for phosphate fertilizer production' },
  { name: 'Phosphoric Acid', desc: 'Key intermediate for phosphate fertilizers' },
]

export default function Page() {
  return (
    <>
      <Section id="fertilizers-intro" eyebrow="Fertilizers" title="Integrated portfolio and market access">
        <p className="text-lg text-neutral-900">
          Full-line portfolio across nitrogen, phosphate, potash and key raw materials. From origination to delivery, we provide certainty in volatile markets.
        </p>
      </Section>

      {/* Urea - Main Annual Product */}
      <section className="relative pb-8">
        <div className="container">
          <Link
            href="/marketing/fertilizers/urea"
            className="group relative block overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-teal-50 p-10 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-100/50 to-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-5xl font-bold text-brand-900">Urea</h2>
              <p className="mb-6 max-w-2xl text-xl text-neutral-900">
                46% nitrogen content. The world&apos;s most widely used solid nitrogen fertilizer.
                Australian focus with direct origination from China, Indonesia, and Middle East.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="rounded-lg bg-white/80 px-5 py-3 text-sm">
                  <div className="font-semibold text-brand-700 text-lg">46% N</div>
                  <div className="text-xs text-neutral-900">Nitrogen content</div>
                </div>
                <div className="rounded-lg bg-white/80 px-5 py-3 text-sm">
                  <div className="font-semibold text-brand-700 text-lg">Prilled & Granular</div>
                  <div className="text-xs text-neutral-900">Multiple forms</div>
                </div>
                <div className="rounded-lg bg-white/80 px-5 py-3 text-sm">
                  <div className="font-semibold text-brand-700 text-lg">Australia Focus</div>
                  <div className="text-xs text-neutral-900">Primary market</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-brand-600 font-semibold text-lg group-hover:gap-3 transition-all">
                Explore Urea Program
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Nitrogen */}
      <section className="relative pb-8">
        <div className="container">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-neutral-900">Nitrogen</h3>
            <p className="text-neutral-900">Essential for protein synthesis and chlorophyll production</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {nitrogenProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-300">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h4>
                  <p className="text-sm text-neutral-900">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potash */}
      <section className="relative pb-8">
        <div className="container">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-neutral-900">Potash</h3>
            <p className="text-neutral-900">Vital for water regulation and disease resistance</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {potashProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-300">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h4>
                  <p className="text-sm text-neutral-900">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phosphate */}
      <section className="relative pb-12">
        <div className="container">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-neutral-900">Phosphate</h3>
            <p className="text-neutral-900">Critical for root development and energy transfer</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {phosphateProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h4>
                  <p className="text-sm text-neutral-900">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
