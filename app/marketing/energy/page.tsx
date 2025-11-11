import Section from '@/components/Section'

export const metadata = {
  title: 'Energy & Dry Bulk',
  description: 'Dry bulk commodities including sulphur, petcoke, iron ore, and DRI with strategic sourcing capabilities.',
}

const dryBulkProducts = [
  { name: 'Sulphur', spec: 'Elemental sulphur for fertilizer production and industrial processes', category: 'Raw Materials' },
  { name: 'Petcoke', spec: 'Petroleum coke for fuel and industrial applications', category: 'Carbon Products' },
  { name: 'DRI (Direct Reduced Iron)', spec: 'High-purity iron for steelmaking and metallurgical applications', category: 'Iron & Steel' },
  { name: 'Iron Ore', spec: 'Iron ore fines and concentrates for steel production', category: 'Iron & Steel' },
  { name: 'Iron Ore Fines', spec: 'Fine-grade iron ore for blast furnace and pelletizing operations', category: 'Iron & Steel' },
]

export default function Page() {
  return (
    <>
      <Section eyebrow="Energy & Dry Bulk" title="Dry bulk commodities">
        <p className="text-lg text-neutral-700 mb-4">
          Strategic sourcing and delivery of dry bulk materials including sulphur, petcoke, iron ore, and DRI. This represents a complementary portfolio alongside our core fertilizer operations.
        </p>
        <p className="text-neutral-600">
          For our complete product range including refined petroleum products, aviation fuels, and more, please see our{' '}
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 font-semibold hover:text-brand-700 underline"
          >
            company presentation
          </a>.
        </p>
      </Section>

      {/* Dry Bulk */}
      <section className="relative pb-20">
        <div className="container">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Product Range</h3>
            <p className="text-neutral-600">Raw materials supporting industrial, agricultural, and steel production supply chains</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dryBulkProducts.map((product) => {
              const isIronSteel = product.category === 'Iron & Steel'
              const badgeColor = isIronSteel ? 'bg-slate-50 text-slate-700' : 'bg-amber-50 text-amber-700'
              const borderColor = isIronSteel ? 'hover:border-slate-300' : 'hover:border-amber-300'

              return (
                <div key={product.name} className={`group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ${borderColor}`}>
                  <div className="mb-3">
                    <div className={`mb-2 inline-block rounded-md px-3 py-1 text-xs font-medium ${badgeColor}`}>
                      {product.category}
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900">{product.name}</h4>
                  </div>
                  <p className="text-sm text-neutral-600">{product.spec}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

