import Section from '@/components/Section'

export const metadata = {
  title: 'Energy',
  description: 'Select dry bulk commodities with strategic sourcing capabilities.',
}

const dryBulkProducts = [
  { name: 'Sulphur', spec: 'Elemental sulphur for fertilizer production and industrial processes', category: 'Raw Materials' },
  { name: 'Petcoke', spec: 'Petroleum coke for fuel and industrial applications', category: 'Carbon Products' },
]

export default function Page() {
  return (
    <>
      <Section eyebrow="Energy" title="Select dry bulk commodities">
        <p className="text-lg text-neutral-700 mb-4">
          Strategic sourcing and delivery of select dry bulk materials. Energy represents a complementary portfolio alongside our core fertilizer operations.
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

