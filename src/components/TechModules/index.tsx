import React, { useEffect, useRef } from 'react'
import './TechModules.scss'
import { useI18n } from '@/i18n'

export default function TechModules() {
  const { t } = useI18n()
  const cards = t.techModules.cards
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [cards.length])

  return (
    <section className="tech-modules" data-module-id="techModules">
      <h2 className="section-title">{t.techModules.title}</h2>
      <div className="bento-grid">
        {cards.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => { cardRefs.current[idx] = el }}
            className={`bento-card bento-card--${card.size}`}
            style={{'--card-index': idx} as React.CSSProperties}
          >
            <span className="bento-icon">{card.icon}</span>
            <h3 className="bento-name">{card.name}</h3>
            <p className="bento-desc">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
