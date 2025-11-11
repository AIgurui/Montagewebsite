import Section from '@/components/Section'
import UreaHero from '@/components/australia/UreaHero'
import SupplyChainAdvantages from '@/components/australia/SupplyChainAdvantages'
import PartnershipApproach from '@/components/australia/PartnershipApproach'
import AustraliaKPI from '@/components/australia/AustraliaKPI'
import Link from 'next/link'
import { ButtonPrimary, ButtonSecondary } from '@/components/Button'

export const metadata = {
  title: 'Australia Market - Premium Urea Supply',
  description: 'Montage Oil brings premium Middle Eastern urea to Australian agriculture. 2M MT annual volume, flexible consignment programs, DAWE biosecurity compliant.',
}

export default function Page() {
  return (
    <>
      <UreaHero />

      <AustraliaKPI />

      <Section
        id="urea-focus"
        eyebrow="Australia 2026"
        title="Premium Middle Eastern Urea for Australian Agriculture"
        nextId="supply-chain"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Product Specifications</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Forms:</strong> Granular and Prilled Urea available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Origin:</strong> Premium Middle Eastern sources (OMIFCO, Fertiglobe)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Nitrogen Content:</strong> 46% minimum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Compliance:</strong> DAWE biosecurity certified supply chain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Quality:</strong> Full origin certificates and quality parameters provided</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Australian Applications</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Wheat:</strong> Optimal for major wheat-growing regions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Canola:</strong> Ideal nitrogen source for canola production</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Cotton:</strong> Proven performance in cotton-growing areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Seasonal Timing:</strong> Programs aligned with Australian agricultural calendar</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/marketing/contact"><ButtonPrimary>Configure Your Seasonal Program</ButtonPrimary></Link>
          <a href="/brochure/Montage_Oil_DMCC_Company_Profile_2025.pdf" target="_blank" rel="noopener noreferrer">
            <ButtonSecondary>View Full Product Portfolio</ButtonSecondary>
          </a>
        </div>
      </Section>

      <SupplyChainAdvantages />

      <PartnershipApproach />

      <Section
        id="technical-docs"
        eyebrow="Resources"
        title="Technical Documentation & Specifications"
        className="bg-neutral-50"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card">
            <div className="text-brand-600 font-bold mb-2">Product Specifications</div>
            <p className="text-sm text-neutral-600 mb-4">Detailed technical specs, origin certificates, and quality parameters for urea products.</p>
            <Link href="/marketing/contact" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              Request Specs →
            </Link>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card">
            <div className="text-brand-600 font-bold mb-2">Full Product Portfolio</div>
            <p className="text-sm text-neutral-600 mb-4">Complete fertilizer range including nitrogen, phosphate, and potash products.</p>
            <a href="/brochure/Montage_Oil_DMCC_Company_Profile_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              Download Brochure →
            </a>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card">
            <div className="text-brand-600 font-bold mb-2">DAWE Compliance</div>
            <p className="text-sm text-neutral-600 mb-4">Biosecurity documentation and quarantine standards compliance information.</p>
            <Link href="/marketing/contact" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              Get Documentation →
            </Link>
          </div>
        </div>
      </Section>

      <Section
        id="contact-australia"
        title="Ready to build your Australian supply program?"
        className="bg-brand-600 text-white"
      >
        <p className="text-lg text-white/90 max-w-2xl">
          Speak with our Australia team to configure a consignment program tailored to your seasonal requirements and volume needs.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/marketing/contact"><ButtonPrimary>Speak with Australia Team</ButtonPrimary></Link>
          <Link href="/marketing/fertilizers"><ButtonSecondary>Explore All Fertilizers</ButtonSecondary></Link>
        </div>
      </Section>
    </>
  )
}
