import NextSection from '../NextSection'

export default function AustraliaKPI() {
  const items = [
    { k: '46% N', t: 'Nitrogen Content', desc: 'Premium grade urea' },
    { k: 'DAWE', t: 'Biosecurity Certified', desc: 'Full compliance' },
    { k: 'Argus FOB', t: 'Transparent Pricing', desc: 'ME benchmark' },
    { k: '24/7', t: 'Trade Support', desc: 'Dubai hub coverage' },
  ]

  return (
    <section id="australia-kpi" className="relative bg-neutral-50 py-12">
      <div className="container">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-widest text-brand-600 mb-2">Why Montage for Australia</div>
          <h2 className="text-2xl font-bold text-neutral-900">Built for Australian Agricultural Excellence</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-card hover:shadow-lg transition-shadow">
              <div className="text-3xl font-black text-brand-600">{i.k}</div>
              <div className="text-base font-semibold text-neutral-900 mt-2">{i.t}</div>
              <div className="text-sm text-neutral-900 mt-1">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <NextSection to="urea-focus" />
    </section>
  )
}
