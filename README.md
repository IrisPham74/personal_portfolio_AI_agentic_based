# Iris Pham — Personal Portfolio

**Live at [irispham74.com](https://irispham74.com)**

> A clean, minimal personal portfolio website built with React + Vite, styled with Tailwind CSS, and animated with Framer Motion. Developed collaboratively with Claude (Anthropic) as an AI-assisted project.

---

## What This Site Is For

This portfolio serves as a digital resume and personal showcase for **Iris Pham**, a Data Analyst / Data Scientist based in Eindhoven, the Netherlands. The site presents her professional background, technical skills, and projects in one polished, fast-loading page — designed to make a strong first impression with recruiters, collaborators, and the tech community.

---

## Sections & Content

| Section | What's Inside |
|---|---|
| **Hero** | Name, tagline ("I love to tell stories with data"), and CTA links to resume and contact |
| **About** | Short bio, current location, personal values, and background as a master's student at TU/e |
| **Skills** | Tech stack grouped by category: Frontend, Backend, and Tools & DevOps |
| **Projects** | Featured project cards with descriptions, tech tags, and links to GitHub / live demos |
| **Experience** | Work history (internships, research roles) with company, period, and tech used |
| **Education** | MSc Data Science at Eindhoven University of Technology + Bachelor's degree |
| **Social Activities** | Extracurricular roles, organizations, and community contributions |
| **Contact** | Email link and social links (GitHub, LinkedIn) |

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + custom CSS variables (dark/light theme ready)
- **Animations**: Framer Motion (scroll-triggered, `once: true`)
- **Fonts**: Playfair Display (display) + DM Sans (body)
- **Deployment**: Vercel

---

## Project Structure

```
my_project/
├── public/              # Static assets (favicon, profile image)
├── src/
│   ├── components/      # Navbar, Footer, BottomNav, PersonChip
│   ├── sections/        # Hero, About, Skills, Projects, Experience,
│   │                    # Education, Contact, SocialActivities
│   ├── data/            # Content config (profile.js, projects.js,
│   │                    # skills.js, experience.js, education.js,
│   │                    # activities.js)
│   ├── styles/          # Global CSS variables and base styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

> All user-facing content lives in `src/data/` — updating the portfolio only requires editing those files, no component changes needed.

---

## Getting Started

```bash
npm install       # Install dependencies
npm run dev       # Dev server → http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build locally
```

---

## AI-Assisted Development

This project was built using **Claude Code** (by Anthropic) as an agentic AI pair-programmer — from scaffolding the component architecture to writing content data structures and styling decisions. The repo name reflects this: `personal_portfolio_agentic_AI_based`.

---

## Contact

- **Email**: irispham0704@gmail.com
- **LinkedIn**: [thi-tram-anh-pham](https://www.linkedin.com/in/thi-tram-anh-pham)
- **GitHub**: [IrisPham74](https://github.com/IrisPham74)
- **Location**: Eindhoven, the Netherlands
