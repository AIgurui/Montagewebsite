import Section from '@/components/Section'
import UreaHero from '@/components/australia/UreaHero'
import PartnershipApproach from '@/components/australia/PartnershipApproach'
import Link from 'next/link'
import { ButtonPrimary, ButtonSecondary } from '@/components/Button'

export const metadata = {
  title: 'Australia Market - Urea Supply',
  description: 'Montage Oil brings urea to Australian agriculture. Flexible consignment programs tailored to your seasonal needs.',
}

export default function Page() {
  return (
    <>
      <UreaHero />

      <Section
        id="urea-focus"
        eyebrow="Australia 2026"
        title="Urea for Australian Agriculture"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Product Specifications</h3>
            <ul className="space-y-2 text-neutral-900">
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Forms:</strong> Granular and Prilled Urea available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Origin:</strong> Direct from established producers (OMIFCO, Fertiglobe)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Nitrogen Content:</strong> 46% minimum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Quality:</strong> Full origin certificates and quality parameters provided</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Australian Applications</h3>
            <ul className="space-y-2 text-neutral-900">
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
          <Link href="#contact-form"><ButtonPrimary>Request Specifications</ButtonPrimary></Link>
          <a href="/brochure/Montage_Oil_DMCC_Company_Profile_2025.pdf" target="_blank" rel="noopener noreferrer">
            <ButtonSecondary>View Full Product Portfolio</ButtonSecondary>
          </a>
        </div>
      </Section>

      <Section
        id="contact-form"
        eyebrow="Get in Touch"
        title="Request Product Specifications"
        className="bg-neutral-50"
      >
        <p className="text-lg text-neutral-900 mb-8 max-w-2xl">
          Leave your contact details and we&apos;ll send you detailed product specifications and discuss your seasonal program needs.
        </p>
        <form action="/api/contact" method="POST" className="max-w-xl">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-1">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="your.email@company.com"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-900 mb-1">
                WhatsApp Number <span className="text-neutral-900">(optional)</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="+61 XXX XXX XXX"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-1">
                Company Name <span className="text-neutral-900">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-1">
                Message <span className="text-neutral-900">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="Tell us about your seasonal requirements..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </Section>

      <PartnershipApproach />

      <Section
        id="technical-docs"
        eyebrow="Resources"
        title="Technical Documentation & Specifications"
        className="bg-neutral-50"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card">
            <div className="text-brand-600 font-bold mb-2">Product Specifications</div>
            <p className="text-sm text-neutral-900 mb-4">Detailed technical specs, origin certificates, and quality parameters for urea products.</p>
            <Link href="#contact-form" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              Request Specs →
            </Link>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card">
            <div className="text-brand-600 font-bold mb-2">Full Product Portfolio</div>
            <p className="text-sm text-neutral-900 mb-4">Complete fertilizer range including nitrogen, phosphate, and potash products.</p>
            <a href="/brochure/Montage_Oil_DMCC_Company_Profile_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              Download Brochure →
            </a>
          </div>
        </div>
      </Section>

      <Section
        id="contact-australia"
        title="Ready to build your Australian supply program?"
        className="bg-brand-600 text-white"
      >
        <p className="text-lg text-white/90 max-w-2xl">
          Speak with our Australia team to discuss programs tailored to your seasonal requirements.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://calendly.com/zakiullah-montageoil/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-600 hover:bg-neutral-100 transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Meeting
          </a>
          <Link href="/marketing/contact"><ButtonSecondary>Send a Message</ButtonSecondary></Link>
          <Link href="/marketing/fertilizers"><ButtonSecondary>Explore All Fertilizers</ButtonSecondary></Link>
        </div>
      </Section>
    </>
  )
}
