import Section from '@/components/Section'

export const metadata = { title: 'Capabilities' }

export default function Page() {
  return (
    <>
      <Section eyebrow="Capabilities" title="From origination to delivery">
        <ul className="list-disc pl-5 text-slate-300">
          <li>Origination & sourcing</li>
          <li>Risk management</li>
          <li>Shipping & logistics</li>
          <li>Trade finance</li>
        </ul>
        <p className="mt-3">An integrated approach to distribution underpins repeatable execution.</p>
      </Section>
    </>
  )
}

