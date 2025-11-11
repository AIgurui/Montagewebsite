export default function KPI() {
  const items = [
    { k: '24/7', t: 'Trading Coverage' },
    { k: '+15', t: 'Markets Served' },
    { k: 'Zero', t: 'Tolerance on Risk' },
  ]
  return (
    <section className="py-8 bg-neutral-50">
      <div className="container grid gap-3 sm:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="rounded-xl border border-neutral-200 bg-white p-5 text-center shadow-card">
            <div className="text-2xl font-black text-neutral-900">{i.k}</div>
            <div className="text-neutral-600">{i.t}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
