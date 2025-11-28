import Section from '@/components/Section'

export const metadata = { title: 'About' }

export default function Page() {
  return (
    <>
      <Section id="about-intro" eyebrow="About" title="Global network. Local execution." nextId="safety-compliance">
        <p>
          Montage Oil DMCC is a Dubai-based international trading company specialising in fertilizers and petrochemicals. The company is part of a global network with leading market positions across Latin America, the Middle East, Southeast Asia, and Africa.
        </p>
        <p>
          We combine the reach and financial strength of an established international trader with deep local market knowledge built through long-standing relationships in the regions we serve. Equally important is our commitment to service excellence—connecting manufacturers and end-users through tailor-made solutions that go beyond simple distribution.
        </p>
        <p>
          As we expand our presence into the Asia Pacific region, we bring proven expertise in world fertilizer markets together with a partner-focused approach that prioritises flexibility, reliability, and local execution.
        </p>
      </Section>
      <Section id="safety-compliance" title="Safety & Compliance">
        <p>
          A safety-first principle underpins operations.
        </p>
      </Section>
    </>
  )
}

