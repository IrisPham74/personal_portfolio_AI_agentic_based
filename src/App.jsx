import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import SocialActivities from './sections/SocialActivities'
import Contact from './sections/Contact'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [dark])

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <SocialActivities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
