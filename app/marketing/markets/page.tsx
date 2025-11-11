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
            Montage Oil maintains active operations across Africa, Latin America, Asia-Pacific and MENA regions. Our coverage means direct origination relationships, shipping certainty through established logistics networks, and flexible financing tailored to local market conditions.
          </p>
          <p className="text-neutral-600">
            The map below shows our priority markets with real-time local times. We update our geographic footprint quarterly as we expand into new territories and deepen existing relationships.
          </p>
        </div>
      </Section>

      <section className="pb-20">
        <div className="container">
          <LiveMarketsMap />

          {/* Accessibility text summary */}
          <p className="sr-only">
            Active markets across Latin America (Mexico, Brazil), Africa (Nigeria, Kenya),
            Asia-Pacific (China, India, Vietnam, Indonesia, Singapore, Malaysia, Australia, New Zealand),
            and MENA (UAE, Oman, Saudi Arabia) with local times shown.
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
