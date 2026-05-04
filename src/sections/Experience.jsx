import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Experience
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12" style={{ color: 'var(--text)' }}>
          Work experience
        </h2>
      </motion.div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
          style={{ backgroundColor: 'var(--border)', marginLeft: '11px' }}
        />

        <div className="flex flex-col gap-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="md:pl-10 relative"
            >
              <div
                className="absolute left-0 top-6 w-5 h-5 rounded-full hidden md:flex items-center justify-center"
                style={{ backgroundColor: 'var(--surface)', border: '2px solid var(--accent)' }}
              />

              <div
                className="p-6 rounded-2xl"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end shrink-0 gap-1">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                    >
                      {job.period}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {job.location} · {job.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                  {job.description}
                </p>

                {job.skills && job.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
