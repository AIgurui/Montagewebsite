import NextSection from './NextSection'

type Props = { id?: string; nextId?: string; title?: string; eyebrow?: string; className?: string; children: React.ReactNode };

export default function Section({ id, nextId, title, eyebrow, className, children }: Props) {
  return (
    <section id={id} className={`relative py-6 sm:py-8 md:py-12 ${className || ''}`}>
      <div className="container px-4 sm:px-6">
        {eyebrow && <div className="text-xs uppercase tracking-widest text-brand-600 font-semibold">{eyebrow}</div>}
        {title && <h2 className="mt-1 text-xl sm:text-2xl font-bold text-neutral-900 md:text-3xl">{title}</h2>}
        <div className="prose-light mt-3 sm:mt-4 space-y-3 sm:space-y-4">{children}</div>
      </div>
      {nextId && <NextSection to={nextId} />}
    </section>
  )
}
