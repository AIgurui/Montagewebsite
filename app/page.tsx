import Hero from '@/components/Hero'
import KPI from '@/components/KPI'
import Section from '@/components/Section'
import Link from 'next/link'

export const metadata = {
  title: 'Fertilizers. Intelligence. Reach.',
  description: 'Global fertilizer and energy trading with disciplined risk, transparent execution, and a partnership-first approach.',
}

export default function Page() {
  return (
    <>
      <Hero />
      <KPI />
      <Section eyebrow="Positioning" title="Global trading with local execution">
        <p>
          We manage complex supply chains and combine a global network with outstanding local execution. Our integrated solutions and partnership mindset deliver tailor-made market access and best-in-class service.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/marketing/fertilizers" className="rounded-full border border-white/15 px-5 py-3 font-medium text-white">Fertilizers Hub</Link>
          <Link href="/marketing/contact" className="rounded-full bg-brand px-5 py-3 font-medium text-black">Contact</Link>
        </div>
      </Section>
    </>
  )
}

