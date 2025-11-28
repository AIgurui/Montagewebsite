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
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-neutral-900">
            Montage operates across three strategic regions with a growing distribution network. We distribute north of 2 million tonnes of nitrogenous fertilizers annually and north of 1 million tonnes of phosphatic fertilizers, serving key markets through established logistics networks and flexible financing solutions.
          </p>

          {/* Regional Sections */}
          <div className="space-y-3 sm:space-y-4">
            {/* Latin America */}
            <div className="rounded-lg sm:rounded-xl border border-neutral-200 bg-white overflow-hidden">
              <div className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-base sm:text-lg text-neutral-900 bg-neutral-50">
                Latin America
              </div>
              <div className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-neutral-900">
                <p>
                  In Latin America, we maintain a competitive presence across the region&apos;s agricultural markets. Our strategy focuses on competing aggressively with current incumbents through reliable supply chains, competitive pricing structures, and responsive customer service. We work with importers and distributors to ensure consistent availability of both nitrogenous and phosphatic fertilizers throughout key growing seasons.
                </p>
              </div>
            </div>

            {/* Africa */}
            <div className="rounded-lg sm:rounded-xl border border-neutral-200 bg-white overflow-hidden">
              <div className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-base sm:text-lg text-neutral-900 bg-neutral-50">
                Africa
              </div>
              <div className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-neutral-900">
                <p>
                  Our African operations extend beyond traditional fertilizer distribution to include sulphur and energy products. This diversified portfolio allows us to serve agricultural, industrial, and energy sectors across the continent. We leverage regional partnerships and strategic storage locations to maintain supply reliability and respond to market demands across multiple product categories.
                </p>
              </div>
            </div>

            {/* Asia Pacific */}
            <div className="rounded-lg sm:rounded-xl border border-neutral-200 bg-white overflow-hidden">
              <div className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-base sm:text-lg text-neutral-900 bg-neutral-50">
                Asia Pacific
              </div>
              <div className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-neutral-900">
                <p>
                  The Asia Pacific region represents a significant focus for our operations, where we distribute fertilizers alongside energy products including iron ore and related commodities. Our direct origination relationships enable efficient supply chains and competitive market positioning. We serve agricultural markets while supporting the region&apos;s growing industrial and energy sectors through strategic product diversification.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4">
            <a
              href="https://calendly.com/zakiullah-montageoil/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-brand-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
