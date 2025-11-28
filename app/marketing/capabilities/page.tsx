import Section from '@/components/Section'

export const metadata = {
  title: 'Capabilities',
  description: 'End-to-end commodity distribution capabilities from origination to delivery.',
}

const capabilities = [
  {
    title: 'Origination & Sourcing',
    description: 'Direct relationships with producers across key markets. We maintain consistent supply through long-term partnerships and market intelligence networks.',
    details: [
      'Producer relationships in China, Indonesia, Middle East, and Africa',
      'Quality assurance and specification verification',
      'Market intelligence and price discovery',
    ],
  },
  {
    title: 'Risk Management',
    description: 'Structured approach to commodity price, credit, and operational risk. We deploy financial instruments and operational hedges to protect value.',
    details: [
      'Price risk mitigation through derivatives and physical hedging',
      'Credit risk assessment and monitoring',
      'Currency and freight exposure management',
    ],
  },
  {
    title: 'Shipping & Logistics',
    description: 'Coordination of vessel chartering, port operations, and freight optimization. Our logistics network ensures reliable delivery timing.',
    details: [
      'Vessel chartering and freight negotiation',
      'Port agency coordination and documentation',
      'Customs clearance and regulatory compliance',
    ],
  },
  {
    title: 'Trade Finance',
    description: 'Flexible financing structures including letters of credit, consignment programs, and payment terms tailored to market conditions.',
    details: [
      'Letters of credit and payment guarantees',
      'Consignment and deferred payment arrangements',
      'Working capital optimization for buyers',
    ],
  },
]

export default function Page() {
  return (
    <>
      <Section eyebrow="Capabilities" title="End-to-end commodity distribution">
        <p className="text-lg !text-black">
          Integrated approach from origination to delivery. We manage the complete supply chain, allowing our partners to focus on their core operations while we handle complexity.
        </p>
      </Section>

      <section className="relative pb-12">
        <div className="container">
          <div className="grid gap-8 md:gap-10">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-brand-300"
              >
                {/* Number Badge */}
                <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold !text-black mb-3">{capability.title}</h3>
                  <p className="!text-black">{capability.description}</p>
                </div>

                <div className="space-y-2">
                  {capability.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" />
                      <p className="text-sm !text-black">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

