import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(12,197,214,0.12),transparent_60%)]" />
      <div className="container relative">
        <h1 className="max-w-3xl font-inter text-4xl font-black leading-tight text-white md:text-6xl">
          Fertilizers. <span className="text-brand">Intelligence.</span> Reach.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Global fertilizer and energy trading with disciplined risk, transparent execution, and a partnership-first approach.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/marketing/contact" className="rounded-full bg-brand px-5 py-3 font-medium text-black">Start a conversation</Link>
          <Link href="/marketing/fertilizers" className="rounded-full border border-white/15 px-5 py-3 font-medium text-white">Explore fertilizers</Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[ 'Integrated origination', 'Logistics certainty', 'Safety-first operations' ].map((t) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

