export default function PersonChip({ name, initials }) {
  const letters = (initials || name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2))

  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
      style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
    >
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
        style={{ backgroundColor: '#111', color: '#fff' }}
      >
        {letters}
      </span>
      {name}
    </span>
  )
}
