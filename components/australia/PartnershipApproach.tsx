import Section from '../Section'
import Link from 'next/link'

export default function PartnershipApproach() {
  return (
    <Section
      id="partnership"
      eyebrow="Partnership"
      title="Solution Partners, Not Just Suppliers"
      nextId="technical-docs"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-base sm:text-lg !text-black font-normal mb-6">
            We don&apos;t just deliver fertilizer—we build long-term partnerships that align with your business goals. Our approach is proven across global markets and tailored for Australian agricultural excellence.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-brand-100 p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold !text-black">Seasonal Program Customization</h4>
                <p className="text-sm !text-black font-normal mt-1">Configure delivery schedules around Australian planting and top-dressing windows for wheat, canola, and cotton cycles.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-brand-100 p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold !text-black">Risk Management Expertise</h4>
                <p className="text-sm !text-black font-normal mt-1">Leverage our global trading desk for price risk management, hedge strategies, and market intelligence specific to Australian conditions.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-brand-100 p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold !text-black">Local Execution, Global Network</h4>
                <p className="text-sm !text-black font-normal mt-1">Benefit from our established Australian office combined with Dubai hub operations and Middle Eastern producer relationships.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-brand-100 p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold !text-black">Transparent Operations</h4>
                <p className="text-sm !text-black font-normal mt-1">Full visibility on pricing benchmarks, supply chain status, vessel tracking, and documentation throughout the program lifecycle.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border-2 border-brand-600 bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold !text-black mb-4">Proven Global Experience</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-brand-700 uppercase tracking-wide mb-1">Africa</div>
                <p className="text-sm !text-black font-normal">Multi-year supply programs supporting agricultural development</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-brand-700 uppercase tracking-wide mb-1">Mexico</div>
                <p className="text-sm !text-black font-normal">200k+ MT consignment model delivering seasonal flexibility</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-brand-700 uppercase tracking-wide mb-1">Latin America</div>
                <p className="text-sm !text-black font-normal">Established distribution networks across multiple markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
