import Section from '@/components/Section'

export const metadata = { title: 'About' }

export default function Page() {
  return (
    <>
      <Section eyebrow="About" title="Global network. Local execution.">
        <p>
          We manage complex supply chains, combining a global network with local execution. Our values: entrepreneurship, service excellence, accountability, teamwork, and honesty.
        </p>
      </Section>
      <Section title="Safety & Compliance">
        <p>
          A safety-first principle underpins operations. KYCs, sanctions screening, and AML controls form the foundation of every trade.
        </p>
      </Section>
    </>
  )
}

