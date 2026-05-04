import { motion } from 'framer-motion'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Education
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12" style={{ color: 'var(--text)' }}>
          Academic background
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                  {edu.institution}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end shrink-0 gap-1">
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >
                  {edu.period}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {edu.location}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              {edu.description}
            </p>

            {edu.highlights && edu.highlights.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {edu.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
