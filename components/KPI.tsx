export default function KPI() {
  const items = [
    { k: '24/7', t: 'Trading Coverage' },
    { k: '+15', t: 'Markets Served' },
    { k: 'Zero', t: 'Tolerance on Risk' },
  ]
  return (
    <section className="py-8">
      <div className="container grid gap-3 sm:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
            <div className="text-2xl font-black text-white">{i.k}</div>
            <div className="text-slate-300">{i.t}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

