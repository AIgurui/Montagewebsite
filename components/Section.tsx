type Props = { title?: string; eyebrow?: string; children: React.ReactNode };

export default function Section({ title, eyebrow, children }: Props) {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        {eyebrow && <div className="text-xs uppercase tracking-widest text-brand-600">{eyebrow}</div>}
        {title && <h2 className="mt-1 text-2xl font-bold text-neutral-900 md:text-3xl">{title}</h2>}
        <div className="prose-light mt-4 space-y-4">{children}</div>
      </div>
    </section>
  )
}
