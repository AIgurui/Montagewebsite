import Section from '@/components/Section'
import MapTerritories from '@/components/MapTerritories'

export const metadata = { title: 'Territories', description: 'Geographic presence and coverage.' }

export default function Page() {
  return (
    <>
      <Section id="territories" title="Our Territories" eyebrow="Coverage" nextId="territories-map">
        <p>
          Our geographic footprint spans priority corridors across MENA, parts of Europe, South Asia and East Africa. The map highlights active presence zones.
        </p>
      </Section>
      <section id="territories-map" className="pb-20">
        <div className="container">
          <MapTerritories />
        </div>
      </section>
    </>
  )
}

