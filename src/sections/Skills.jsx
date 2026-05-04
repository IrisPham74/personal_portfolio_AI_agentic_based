import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Skills
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12" style={{ color: 'var(--text)' }}>
          What I work with
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="p-6 rounded-2xl"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--accent)' }}
            >
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--bg)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
