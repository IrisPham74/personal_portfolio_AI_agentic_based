import { useState } from 'react'

export default function PersonChip({ name, image, onRemove }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
      style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-6 h-6 rounded-full object-cover shrink-0"
        />
      ) : (
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
        >
          {initials}
        </span>
      )}
      {name}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove"
          className="ml-1 rounded-full w-4 h-4 flex items-center justify-center transition-opacity duration-150 opacity-50 hover:opacity-100"
          style={{ color: 'var(--text)' }}
        >
          ×
        </button>
      )}
    </span>
  )
}
