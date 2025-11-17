import Section from '@/components/Section'
import Link from 'next/link'

export const metadata = {
  title: 'Markets We Serve',
  description: 'Active presence across Africa, Latin America, Asia-Pacific and MENA with 24/7 trading coverage and local market intelligence.',
}

export default function Page() {
  return (
    <>
      <Section id="markets" title="Markets We Serve" eyebrow="Global Reach">
        <div className="space-y-8">
          <p className="text-lg text-neutral-700">
            Montage Oil operates across three strategic regions with a growing distribution network. We distribute north of 2 million tonnes of nitrogenous fertilizers annually and north of 1 million tonnes of phosphatic fertilizers, serving key markets through established logistics networks and flexible financing solutions.
          </p>

          {/* Regional Sections */}
          <div className="space-y-4">
            {/* Latin America */}
            <details className="group rounded-xl border border-neutral-200 bg-white overflow-hidden hover:border-brand-300 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-lg text-neutral-900 hover:bg-neutral-50 transition-colors">
                <span>Latin America</span>
                <svg
                  className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 pt-2 text-neutral-600 border-t border-neutral-100">
                <p>
                  In Latin America, we maintain a competitive presence across the region&apos;s agricultural markets. Our strategy focuses on competing aggressively with current incumbents through reliable supply chains, competitive pricing structures, and responsive customer service. We work with importers and distributors to ensure consistent availability of both nitrogenous and phosphatic fertilizers throughout key growing seasons.
                </p>
              </div>
            </details>

            {/* Africa */}
            <details className="group rounded-xl border border-neutral-200 bg-white overflow-hidden hover:border-brand-300 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-lg text-neutral-900 hover:bg-neutral-50 transition-colors">
                <span>Africa</span>
                <svg
                  className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 pt-2 text-neutral-600 border-t border-neutral-100">
                <p>
                  Our African operations extend beyond traditional fertilizer distribution to include sulphur and energy products. This diversified portfolio allows us to serve agricultural, industrial, and energy sectors across the continent. We leverage regional partnerships and strategic storage locations to maintain supply reliability and respond to market demands across multiple product categories.
                </p>
              </div>
            </details>

            {/* Asia Pacific */}
            <details className="group rounded-xl border border-neutral-200 bg-white overflow-hidden hover:border-brand-300 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-lg text-neutral-900 hover:bg-neutral-50 transition-colors">
                <span>Asia Pacific</span>
                <svg
                  className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 pt-2 text-neutral-600 border-t border-neutral-100">
                <p>
                  The Asia Pacific region represents a significant focus for our operations, where we distribute fertilizers alongside energy products including iron ore and related commodities. Our direct origination relationships enable efficient supply chains and competitive market positioning. We serve agricultural markets while supporting the region&apos;s growing industrial and energy sectors through strategic product diversification.
                </p>
              </div>
            </details>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
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
      </Section>
    </>
  )
}
