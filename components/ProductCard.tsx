type Props = { title: string; desc?: string }

export default function ProductCard({ title, desc }: Props) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h4 className="text-white">{title}</h4>
      {desc && <p className="mt-1 text-sm text-slate-300">{desc}</p>}
    </div>
  )
}

