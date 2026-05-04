# CLAUDE.md — Personal Portfolio Website

## Project Overview

This is a personal portfolio website built to showcase skills, projects, and professional background. The goal is a clean, fast, and visually impressive site that serves as a digital resume and creative showcase.

---

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion
- **Deployment**: Vercel (or Netlify)
- **Package Manager**: npm

---

## Project Structure

```
portfolio/
├── public/
│   └── assets/            # Static images, icons, favicon
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, Card, etc.)
│   ├── sections/          # Page sections (Hero, About, Projects, Contact)
│   ├── data/              # Content config files (projects.js, skills.js)
│   ├── styles/            # Global styles and CSS variables
│   ├── App.jsx
│   └── main.jsx
├── CLAUDE.md              # ← You are here
├── package.json
└── vite.config.js
```

---

## Design Guidelines

- **Aesthetic**: Minimal, typographic-first, dark/light mode support
- **Fonts**: Display font (e.g. Playfair Display) + Body font (e.g. DM Sans)
- **Color Palette**: Neutral base with a single sharp accent color (defined via CSS variables)
- **Motion**: Subtle scroll-triggered reveals, no excessive animation
- **Responsive**: Mobile-first, tested at 375px / 768px / 1280px breakpoints

---

## Key Sections

| Section    | Description                                      |
|------------|--------------------------------------------------|
| Hero       | Name, tagline, CTA buttons (Resume, Contact)     |
| About      | Short bio, photo, personal values                |
| Skills     | Tech stack icons/tags grouped by category        |
| Projects   | Featured project cards with links & descriptions |
| Contact    | Email form or mailto link + social links         |

---

## Content Sources

- Project data lives in `src/data/projects.js`
- Skills list lives in `src/data/skills.js`
- Personal info (bio, name, role) lives in `src/data/profile.js`

> Editing content should only require touching files in `src/data/` — no component changes needed.

---

## Commands
npm install        # Install dependencies
npm run dev        # Start dev server (localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build locally

---

## AI Collaboration Notes (for Claude)

- Keep components small and single-responsibility
- Prefer CSS variables over hardcoded colors
- When adding a new section, also add its entry to the nav links
- All user-facing text should come from `src/data/` — not hardcoded in JSX
- Animations should use `framer-motion` with `viewport={{ once: true }}`
- Do not introduce new dependencies without checking if a native/existing solution works

---

## Deployment

- Push to `main` branch triggers auto-deploy on Vercel
- Environment variables (if any) are set in the Vercel dashboard
- Custom domain: `yourname.dev` (configure in Vercel → Domains)

---

## Status
[x] Project initialized
[ ] Hero section complete
[ ] Projects section complete
[ ] Contact form wired up
[ ] Mobile responsive pass
[ ] Deployed to production