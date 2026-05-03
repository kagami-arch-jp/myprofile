import React, { useState, useEffect, useRef } from 'react'
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
  const activeIdRef = useRef(activeId)

  useEffect(() => {
    activeIdRef.current = activeId
  }, [activeId])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const updateActiveFromScroll = () => {
      const viewportHeight = window.innerHeight
      let bestId = activeIdRef.current
      let bestScore = -Infinity

      navItems.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.bottom < 0 || rect.top > viewportHeight) return

        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
        if (visibleHeight <= 0) return

        const elementHeight = rect.height || 1
        const visibleRatio = visibleHeight / elementHeight
        const topScore = rect.top >= 0 ? 1 - rect.top / (viewportHeight * 0.4) : 0.5

        const score = visibleRatio * 0.3 + topScore * 0.7

        if (score > bestScore) {
          bestScore = score
          bestId = id
        }
      })

      if (bestId !== activeIdRef.current) {
        activeIdRef.current = bestId
        setActiveId(bestId)
      }
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveFromScroll()
          ticking = false
        })
        ticking = true
      }
    }

    updateActiveFromScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
