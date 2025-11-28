import NextSection from './NextSection'
import Link from 'next/link'

export default function KPI({ id = 'kpi', nextId = 'positioning' }: { id?: string; nextId?: string }) {
  const items = [
    { k: '1M+', t: 'Phosphates Traded' },
    { k: '+15', t: 'Markets Served' },
    { k: '2M+', t: 'Nitrogen Traded' },
  ]
  return (
    <section id={id} className="relative bg-neutral-50 py-6 sm:py-8">
      <div className="container px-4 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="rounded-lg sm:rounded-xl border border-neutral-200 bg-white p-4 sm:p-5 text-center shadow-card">
              <div className="text-xl sm:text-2xl font-black text-neutral-900">{i.k}</div>
              <div className="text-sm sm:text-base text-neutral-900">{i.t}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 sm:mt-6 text-center">
          <Link
            href="/marketing/markets"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            See our markets
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      <NextSection to={nextId} />
    </section>
  )
}
