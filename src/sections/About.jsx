import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const values = [
  { label: 'Data-Driven Thinking', description: 'Every insight grounded in evidence, not assumptions.' },
  { label: 'Collaborative Spirit', description: 'Best results come from diverse minds working together.' },
  { label: 'Continuous Learning', description: 'Always growing, always curious.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
          About
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12" style={{ color: 'var(--text)' }}>
          A little about me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-base leading-8 mb-6" style={{ color: 'var(--text-muted)' }}>
            {profile.bio}
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Based in{' '}
            <span style={{ color: 'var(--text)' }}>{profile.location}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {values.map((v, i) => (
            <div
              key={v.label}
              className="p-5 rounded-xl"
              style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="font-medium mb-1" style={{ color: 'var(--text)' }}>{v.label}</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{v.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
