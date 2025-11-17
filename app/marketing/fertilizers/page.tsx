import Section from '@/components/Section'
import Link from 'next/link'

export const metadata = {
  title: 'Fertilizers',
  description: 'Full-line portfolio across nitrogen, phosphate, potash and key raw materials.',
}

const nitrogenProducts = [
  { name: 'Urea', desc: '46% nitrogen content - world&apos;s most widely used solid nitrogen fertilizer', link: '/marketing/fertilizers/urea' },
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
        <p className="text-lg text-neutral-700">
          Full-line portfolio across nitrogen, phosphate, potash and key raw materials. From origination to delivery, we provide certainty in volatile markets.
        </p>
      </Section>

      {/* Nitrogen Raw Materials */}
      <section className="relative pb-12">
        <div className="container">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-900">Nitrogen Raw Materials</h3>
            <p className="text-neutral-600">Essential for protein synthesis and chlorophyll production</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {nitrogenProducts.map((product) => (
              product.link ? (
                <Link
                  key={product.name}
                  href={product.link}
                  className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-300"
                >
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors">{product.name}</h4>
                    <p className="text-sm text-neutral-600">{product.desc}</p>
                  </div>
                </Link>
              ) : (
                <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-300">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-neutral-600">{product.desc}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Potash */}
      <section className="relative pb-12">
        <div className="container">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-900">Potash</h3>
            <p className="text-neutral-600">Vital for water regulation and disease resistance</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {potashProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-300">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h4>
                  <p className="text-sm text-neutral-600">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phosphate */}
      <section className="relative pb-20">
        <div className="container">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-900">Phosphate</h3>
            <p className="text-neutral-600">Critical for root development and energy transfer</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {phosphateProducts.map((product) => (
              <div key={product.name} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h4>
                  <p className="text-sm text-neutral-600">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

