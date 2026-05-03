import React, { useState, useEffect } from 'react'
import './SideNavigation.scss'

interface NavItem {
  id: string
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: '⌂' },
  { id: 'techCapability', label: 'Tech', icon: '⚡' },
  { id: 'journeyTimeline', label: 'Journey', icon: '◉' },
  { id: 'techSolutions', label: 'Solutions', icon: '🔧' },
  { id: 'aboutContact', label: 'About', icon: '◎' },
]

export default function SideNavigation() {
  const [activeId, setActiveId] = useState('hero')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-10% 0px -90% 0px' }
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (isMobile) {
    return (
      <nav className="bottom-nav">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            className={`bottom-nav-item ${activeId === id ? 'active' : ''}`}
            onClick={() => handleClick(id)}
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </button>
        ))}
      </nav>
    )
  }

  return (
    <nav className="side-nav">
      {navItems.map(({ id, label, icon }) => (
        <button
          key={id}
          className={`side-nav-dot ${activeId === id ? 'active' : ''}`}
          onClick={() => handleClick(id)}
          title={label}
        >
          <span className="dot-tooltip">{label}</span>
        </button>
      ))}
    </nav>
  )
}
