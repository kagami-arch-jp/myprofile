import React, { useEffect, useRef } from 'react'
import './SSRSolution.scss'
import { useI18n } from '@/i18n'

export default function SSRSolution() {
  const { t } = useI18n()
  const { title, subtitle, background, solution, advantage, points } = t.ssrSolution
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [points.length])

  return (
    <section className="ssr-solution">
      <h2 className="section-title">{title}</h2>
      <p className="ssr-subtitle">{subtitle}</p>
      <div className="ssr-content">
        <div className="ssr-bg-card">
          <h3>Background</h3>
          <p>{background}</p>
        </div>
        <div className="ssr-solution-card">
          <h3>Solution</h3>
          <p>{solution}</p>
        </div>
        <div className="ssr-advantage-card">
          <h3>Advantage</h3>
          <p>{advantage}</p>
        </div>
      </div>
      <div className="ssr-points-grid">
        {points.map((point, idx) => (
          <div
            key={idx}
            ref={(el) => { cardRefs.current[idx] = el }}
            className="ssr-point-card"
            style={{'--card-index': idx} as React.CSSProperties}
          >
            <span className="ssr-point-icon">{point.icon}</span>
            <h4 className="ssr-point-title">{point.title}</h4>
            <p className="ssr-point-desc">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
