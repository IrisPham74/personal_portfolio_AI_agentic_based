import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const flagSvgs = {
  vn: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="36" height="24" style={{ borderRadius: 3 }}>
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        fill="#FFCD00"
        points="15,3 16.76,7.57 21.66,7.84 17.85,10.93 19.11,15.66 15,13 10.89,15.66 12.15,10.93 8.34,7.84 13.24,7.57"
      />
    </svg>
  ),
  nl: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="36" height="24" style={{ borderRadius: 3 }}>
      <rect width="30" height="20" fill="#21468B" />
      <rect width="30" height="13.33" fill="#fff" />
      <rect width="30" height="6.67" fill="#AE1C28" />
    </svg>
  ),
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 max-w-5xl mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full py-24 md:py-0">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="shrink-0"
        >
          <img
            src="/iris.png"
            alt="Iris Pham"
            className="w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col">
          <motion.p
            {...fadeUp(0.1)}
            className="text-sm font-medium mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4 flex items-center gap-4 flex-wrap"
            style={{ color: 'var(--text)' }}
          >
            {profile.name}
            <span className="flex items-center gap-2">
              {profile.flags.map((f) => (
                <span key={f.code} title={f.label} className="inline-flex" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}>
                  {flagSvgs[f.code]}
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.h2
            {...fadeUp(0.3)}
            className="font-display text-4xl md:text-6xl font-light italic mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            {profile.role}
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="text-base max-w-lg leading-relaxed mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            {profile.bio}
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex items-center gap-4 mb-10">
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            )}
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
