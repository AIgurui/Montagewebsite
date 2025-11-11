import Section from '@/components/Section'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'Fertilizers',
  description: 'Full-line portfolio across nitrogen, phosphate, potash and key raw materials.',
}

const products = [
  'Urea',
  'Ammonium Sulphate',
  'Ammonia',
  'MAP', 'DAP', 'TSP', 'SSP',
  'MOP', 'SOP',
  'Phosphoric Acid',
]

export default function Page() {
  return (
    <>
      <Section eyebrow="Fertilizers" title="Integrated portfolio and market access">
        <p>
          Full-line portfolio across nitrogen, phosphate, potash and key raw materials—including Urea, Ammonium Sulphate, Ammonia, MAP/DAP/TSP/SSP, MOP/SOP, Phosphoric Acid.
        </p>
      </Section>
      <section className="pb-20">
        <div className="container grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p} title={p} />
          ))}
        </div>
      </section>
    </>
  )
}

