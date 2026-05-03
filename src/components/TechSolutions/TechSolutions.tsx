import React, { useState, useRef, useEffect } from 'react'
import './TechSolutions.scss'
import { useI18n } from '@/i18n'

export default function TechSolutions() {
  const { t } = useI18n()
  const { title, subtitle, background, solution, advantage, points } = t.ssrSolution
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

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
            entry.target.classList.add('card-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    cardRefs.current.forEach(ref => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const handleCardClick = (cardId: string) => {
    setFlippedCardId(flippedCardId === cardId ? null : cardId)
  }

  return (
    <section className="tech-solutions" id="techSolutions" data-module-id="techSolutions">
      <h2 className="section-title">{title}</h2>
      <p className="solutions-subtitle">{subtitle}</p>

      {/* Section 1: SSR Architecture */}
      <div className="solutions-section">
        <h3 className="section-heading">SSR Architecture</h3>
        <div className="overview-grid">
          <div className="overview-card ssr-bg-card">
            <h4>Background</h4>
            <p>{background}</p>
          </div>
          <div className="overview-card ssr-solution-card">
            <h4>Solution</h4>
            <p>{solution}</p>
          </div>
          <div className="overview-card ssr-advantage-card">
            <h4>Advantage</h4>
            <p>{advantage}</p>
          </div>
        </div>
        <div className="ssr-points-grid">
          {points.map((point, idx) => (
            <div
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el }}
              className="ssr-point-card"
              style={{ '--card-index': idx } as React.CSSProperties}
            >
              <span className="ssr-point-icon">{point.icon}</span>
              <h4 className="ssr-point-title">{point.title}</h4>
              <p className="ssr-point-desc">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* Section 2: Real-World Cases */}
      <div className="solutions-section">
        <h3 className="section-heading">{t.challengeCards.title}</h3>
        <p className="section-subtitle">{t.challengeCards.subtitle}</p>
        <div className="cases-grid">
          {t.challengeCards.cards.map((card, idx) => (
            <div
              key={card.id}
              className={`case-card ${flippedCardId === card.id ? 'flipped' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="case-inner">
                {/* Front: Challenge */}
                <div className="case-front">
                  <div className="case-icon">{card.icon}</div>
                  <div className="case-badge">Challenge</div>
                  <h4 className="case-title">{card.challenge}</h4>
                  <p className="case-detail">{card.challengeDetail}</p>
                  <div className="case-tech-stack">
                    {card.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <span className="case-hint">
                    {isMobile ? 'Tap to see solution →' : 'Click to see solution →'}
                  </span>
                </div>
                {/* Back: Solution */}
                <div className="case-back">
                  <div className="case-icon">{card.icon}</div>
                  <div className="case-badge solution-badge">Solution</div>
                  <h4 className="case-title">{card.solution}</h4>
                  <p className="case-detail">{card.solutionDetail}</p>
                  <div className="case-result">
                    <span className="result-label">Result:</span>
                    <span className="result-text">{card.result}</span>
                  </div>
                  <div className="case-code">
                    <pre><code>{card.codeSnippet}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
