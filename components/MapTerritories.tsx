export default function MapTerritories() {
  const points = [
    { label: 'MENA', x: '53%', y: '52%' },
    { label: 'Europe', x: '48%', y: '35%' },
    { label: 'South Asia', x: '60%', y: '55%' },
    { label: 'East Africa', x: '50%', y: '60%' },
  ]
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-[#0b1a14] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(transparent 0, transparent 98%, rgba(255,255,255,.08) 99%),
            linear-gradient(90deg, transparent 0, transparent 98%, rgba(255,255,255,.08) 99%)
          `,
          backgroundSize: '40px 40px, 40px 40px',
        }}
      />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(1200px 600px at 60% 50%, rgba(255,255,0,.08), transparent 60%)',
      }} />
      <div className="aspect-[16/9] w-full" />
      {points.map((p) => (
        <div key={p.label} className="absolute" style={{ left: p.x, top: p.y }}>
          <div className="-translate-x-1/2 -translate-y-1/2">
            <div className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_12px_2px_rgba(250,204,21,.9)]" />
            <div className="mt-1 text-xs text-yellow-200">{p.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

