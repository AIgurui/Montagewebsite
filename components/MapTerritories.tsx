import Image from 'next/image'

export default function MapTerritories() {
  const points = [
    { label: 'MENA', x: '53%', y: '52%' },
    { label: 'Europe', x: '48%', y: '35%' },
    { label: 'South Asia', x: '60%', y: '55%' },
    { label: 'East Africa', x: '50%', y: '60%' },
  ]
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-[#0b1a14] text-white shadow-2xl">
      {/* Real map background with dark green overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/map.png"
          alt="World map"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Dark green tint overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0b1a14]/60" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(transparent 0, transparent 98%, rgba(255,255,255,.08) 99%),
            linear-gradient(90deg, transparent 0, transparent 98%, rgba(255,255,255,.08) 99%)
          `,
          backgroundSize: '40px 40px, 40px 40px',
        }}
      />

      {/* Yellow glow for geographical presence */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(1200px 600px at 60% 50%, rgba(255,255,0,.12), transparent 60%)',
      }} />

      <div className="aspect-[16/9] w-full" />

      {/* Territory markers */}
      {points.map((p) => (
        <div key={p.label} className="absolute z-10" style={{ left: p.x, top: p.y }}>
          <div className="-translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_16px_4px_rgba(250,204,21,.9)] animate-pulse" />
              <div className="absolute inset-0 h-3 w-3 rounded-full bg-yellow-300/50 animate-ping" />
            </div>
            <div className="mt-2 whitespace-nowrap text-xs font-semibold text-yellow-100 drop-shadow-lg">{p.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

