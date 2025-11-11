import Section from '@/components/Section'

export const metadata = {
  title: 'Energy',
  description: 'Petroleum products and dry bulk commodities with strategic sourcing capabilities.',
}

const liquidProducts = [
  { name: 'Diesel (EN590)', spec: 'Ultra-low sulfur diesel meeting European standards', category: 'Refined Fuels' },
  { name: 'Gasoline', spec: 'Multiple octane grades for automotive and industrial use', category: 'Refined Fuels' },
  { name: 'Jet A1', spec: 'Aviation turbine fuel meeting international specifications', category: 'Aviation' },
  { name: 'Fuel Oil', spec: 'Heavy fuel oil for power generation and marine applications', category: 'Industrial' },
  { name: 'LPG', spec: 'Liquefied petroleum gas for residential and industrial markets', category: 'Gas' },
]

const dryBulkProducts = [
  { name: 'Sulphur', spec: 'Elemental sulphur for fertilizer production and industrial processes', category: 'Raw Materials' },
  { name: 'Petcoke', spec: 'Petroleum coke for fuel and industrial applications', category: 'Carbon Products' },
]

export default function Page() {
  return (
    <>
      <Section eyebrow="Energy" title="Petroleum products and dry bulk commodities">
        <p className="text-lg text-neutral-700">
          Strategic sourcing and delivery of refined petroleum products, aviation fuels, and select dry bulk materials. Energy represents a complementary portfolio alongside our core fertilizer operations.
        </p>
      </Section>

      {/* Liquid Fuels */}
      <section className="relative pb-12">
        <div className="container">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Refined Petroleum Products</h3>
            <p className="text-neutral-600">Comprehensive range of liquid fuels for transport, aviation, and industrial applications</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {liquidProducts.map((product) => (
              <div key={product.name} className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-300">
                <div className="mb-3">
                  <div className="mb-2 inline-block rounded-md bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                    {product.category}
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">{product.name}</h4>
                </div>
                <p className="text-sm text-neutral-600">{product.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dry Bulk */}
      <section className="relative pb-20">
        <div className="container">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Dry Bulk Commodities</h3>
            <p className="text-neutral-600">Select raw materials supporting industrial and agricultural supply chains</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {dryBulkProducts.map((product) => (
              <div key={product.name} className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300">
                <div className="mb-3">
                  <div className="mb-2 inline-block rounded-md bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                    {product.category}
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">{product.name}</h4>
                </div>
                <p className="text-sm text-neutral-600">{product.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

