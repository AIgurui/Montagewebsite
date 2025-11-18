import Section from '../Section'

export default function SupplyChainAdvantages() {
  const advantages = [
    {
      icon: '🚢',
      title: 'Consignment Stock Programs',
      description: '200-250k MT consignment capabilities. Align inventory with your seasonal demand without upfront capital tie-up.',
    },
    {
      icon: '💰',
      title: 'Flexible Pricing Models',
      description: 'Argus FOB Middle East benchmarking ensures transparent, market-aligned pricing. Multiple payment structures available.',
    },
    {
      icon: '🌏',
      title: 'Dubai to Australia Direct',
      description: 'Strategic Dubai hub provides proximity advantage to Australian ports. Reliable shipping lanes and proven logistics partners.',
    },
    {
      icon: '📊',
      title: 'Volume & Quality Assurance',
      description: '2 Million MT annual urea trading volume demonstrates supply reliability. Rigorous quality controls and full traceability.',
    },
    {
      icon: '⚡',
      title: 'Premium Middle Eastern Sources',
      description: 'Direct relationships with OMIFCO, Fertiglobe, and other tier-1 Middle Eastern producers ensure consistent quality.',
    },
    {
      icon: '✅',
      title: 'Biosecurity & Compliance',
      description: 'Deep understanding of DAWE requirements. Complete documentation, quarantine standards, and origin certification.',
    },
  ]

  return (
    <Section
      id="supply-chain"
      eyebrow="Supply Chain"
      title="Australian-Optimized Supply Solutions"
      nextId="partnership"
      className="bg-neutral-50"
    >
      <p className="text-lg text-neutral-900 mb-8 max-w-3xl">
        Our consignment model and Dubai hub positioning deliver unmatched flexibility for Australian agricultural operations. Built on proven experience from Mexico, Ethiopia, and Latin American markets.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((adv) => (
          <div key={adv.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">{adv.icon}</div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">{adv.title}</h3>
            <p className="text-sm text-neutral-900 leading-relaxed">{adv.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border-2 border-brand-200 bg-brand-50 p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-brand-900 mb-2">Proven Consignment Model</h4>
            <p className="text-brand-800">
              Our consignment approach has successfully delivered in Mexico and other markets. We align our inventory risk with your seasonal needs, providing working capital relief while ensuring supply certainty during critical planting and top-dressing windows.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
