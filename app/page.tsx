import Hero from '@/components/Hero'
import KPI from '@/components/KPI'
import Section from '@/components/Section'
import AustraliaBanner from '@/components/AustraliaBanner'
import Link from 'next/link'

export const metadata = {
  title: 'Fertilizers. Intelligence. Reach.',
  description: 'Global fertilizer and energy trading with disciplined risk, transparent execution, and a partnership-first approach.',
}

export default function Page() {
  return (
    <>
      <Hero />
      <AustraliaBanner />
      <KPI id="kpi" nextId="positioning" />
      <Section id="positioning" nextId="end-home" eyebrow="Positioning" title="Global trading with local execution">
        <p>
          We manage complex supply chains and combine a global network with outstanding local execution. Our integrated solutions and partnership mindset deliver tailor-made market access and best-in-class service.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-start">
          <Link href="/marketing/fertilizers" className="rounded-full border-2 border-white bg-white/10 backdrop-blur-sm px-5 py-3 font-medium text-white hover:bg-white hover:text-brand-900 transition-colors">Fertilizers Hub</Link>
          <Link href="/marketing/contact" className="rounded-full bg-brand px-5 py-3 font-medium text-black hover:bg-brand-700 transition-colors">Contact</Link>
        </div>
      </Section>
      <div id="end-home" />
    </>
  )
}
