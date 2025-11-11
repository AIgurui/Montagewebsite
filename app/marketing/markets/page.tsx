import Section from '@/components/Section'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Client-side only, no SSR for heavy map component
const LiveMarketsMap = dynamic(() => import('@/components/LiveMarketsMap'), {
  ssr: false,
  loading: () => (
    <div className="aspect-[16/9] w-full animate-pulse rounded-2xl bg-neutral-100" />
  ),
})

export const metadata = {
  title: 'Markets We Serve',
  description: 'Active presence across Africa, Latin America, Asia-Pacific and MENA with 24/7 trading coverage and local market intelligence.',
}

export default function Page() {
  return (
    <>
      <Section id="markets" title="Markets We Serve" eyebrow="Global Reach">
        <div className="space-y-6">
          <p className="text-lg text-neutral-700">
            Montage Oil operates across three strategic regions: Latin America, Africa, and Asia Pacific. We maintain direct origination relationships in China and Indonesia, with comprehensive coverage spanning these key markets.
          </p>
          <p className="text-neutral-600">
            The live map below highlights our operational footprint across all three regions, featuring Melbourne with real-time local time. Our regional presence ensures shipping certainty through established logistics networks and flexible financing tailored to local market conditions.
          </p>
        </div>
      </Section>

      <section className="pb-20">
        <div className="container">
          <LiveMarketsMap />

          {/* Accessibility text summary */}
          <p className="sr-only">
            Montage Oil operates across three strategic regions: Latin America, Africa, and Asia Pacific.
            The map shows our operational footprint with regional color highlighting for each continent,
            featuring Melbourne with real-time local time, and live day/night visualization based on the sun position.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/zakiullah-montageoil/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Contact Sales
            </a>
            <Link
              href="/marketing/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-600 px-6 py-3 font-semibold text-brand-600 hover:bg-brand-50 transition-colors"
            >
              Download Market Sheet
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
