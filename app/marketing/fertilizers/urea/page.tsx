import Section from '@/components/Section'

export const metadata = {
  title: 'Urea',
  description: 'Flagship page: sources, logistics, pricing references, and markets.',
}

export default function Page() {
  return (
    <>
      <Section eyebrow="Urea" title="Reliable supply, disciplined execution">
        <p>
          We supply from a wide variety of trusted and high-quality origins in the Middle East, North Africa, and other strategic production centers. Logistics solutions cover bagged and bulk shipments with inland delivery where required. Pricing references align to major benchmarks; final commercial terms remain trade-specific.
        </p>
      </Section>
      <Section title="Markets">
        <p>Primary demand corridors include Africa, Latin America, and Australia.</p>
      </Section>
    </>
  )
}

