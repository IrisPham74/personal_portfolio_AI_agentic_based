import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer
      className="py-8 text-center text-sm"
      style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
    >
      <p>
        Designed &amp; built by{' '}
        <span style={{ color: 'var(--accent)' }}>{profile.name}</span>
      </p>
      <p className="mt-1 text-xs opacity-60">© {new Date().getFullYear()}</p>
    </footer>
  )
}
