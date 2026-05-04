import { motion } from 'framer-motion'
import { activities } from '../data/activities'

export default function SocialActivities() {
  return (
    <section id="activities" className="py-28 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Social Activities
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12" style={{ color: 'var(--text)' }}>
          Beyond the work
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl flex flex-col gap-3"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <div>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text)' }}>
                {item.role}
              </h3>
              <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                {item.organization}
              </p>
            </div>

            <span
              className="self-start text-xs px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            >
              {item.period}
            </span>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
