import React, {useEffect, useState, useRef} from 'react'
import './Hero.scss'
import { useI18n } from '@/i18n'

interface HeroProps {
  booted: boolean
}

export default function Hero({booted}: HeroProps) {
  const { t } = useI18n()
  const [typedName, setTypedName] = useState('')
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [currentKeyword, setCurrentKeyword] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!booted) return
    let i = 0
    const name = t.hero.nameDisplay
    const typeInterval = setInterval(() => {
      if (i <= name.length) {
        setTypedName(name.slice(0, i))
        i++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => setShowSubtitle(true), 300)
      }
    }, 80)
    return () => clearInterval(typeInterval)
  }, [booted, t.hero.nameDisplay])

  useEffect(() => {
    if (!booted) return
    const keywordInterval = setInterval(() => {
      setCurrentKeyword(prev => (prev + 1) % t.hero.backgroundKeywords.length)
    }, 3000)
    return () => clearInterval(keywordInterval)
  }, [booted, t.hero.backgroundKeywords])

  useEffect(() => {
    if (!booted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }> = []

    const colors = ['#00E5FF', '#FF006E', '#7C4DFF', '#00E676']

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    let animationId: number
    const c = canvas
    const d = ctx
    const w = () => c.width
    const h = () => c.height

    function animate() {
      d.clearRect(0, 0, w(), h())
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w()) p.vx *= -1
        if (p.y < 0 || p.y > h()) p.vy *= -1
        d.beginPath()
        d.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        d.fillStyle = p.color
        d.globalAlpha = p.alpha
        d.fill()
      })
      d.globalAlpha = 1
      const maxDist = 150
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            d.beginPath()
            d.moveTo(particles[i].x, particles[i].y)
            d.lineTo(particles[j].x, particles[j].y)
            d.strokeStyle = `rgba(0, 229, 255, ${0.1 * (1 - dist / maxDist)})`
            d.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      c.width = window.innerWidth
      c.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [booted])

  return (
    <section className="hero" data-module-id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="hero-name-typed">{typedName}</span>
          <span className={`hero-cursor ${showSubtitle ? 'hidden' : ''}`} />
        </h1>
        <p className={`hero-subtitle ${showSubtitle ? 'visible' : ''}`}>
          {t.hero.subtitle}
        </p>
        <div className="hero-keyword">
          <span>{t.hero.backgroundKeywords[currentKeyword]}</span>
        </div>
        {booted && (
          <div className="hero-scroll-indicator">
            <div className="scroll-arrow" />
            <span>{t.hero.ctaText}</span>
          </div>
        )}
      </div>
      <div className="hero-bg-keywords">
        {t.hero.backgroundKeywords.map((kw, i) => (
          <span key={i} style={{
            left: `${10 + (i * 11) % 90}%`,
            top: `${15 + (i * 17) % 70}%`,
            animationDelay: `${i * 0.5}s`
          }}>
            {kw}
          </span>
        ))}
      </div>
    </section>
  )
}
