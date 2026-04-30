import React, {useState, useRef, useCallback} from 'react'
import './ChallengeCards.scss'
import { useI18n } from '@/i18n'

export default function ChallengeCards() {
  const { t } = useI18n()
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null)
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({})
  const [isTilting, setIsTilting] = useState(false)
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    if (flippedCardId) return
    const card = cardRefs.current.get(cardId)
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTiltStyle({
      transform: `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`
    })
    setIsTilting(true)
  }, [flippedCardId])

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({})
    setIsTilting(false)
    setFlippedCardId(null)
  }, [])

  const handleMouseEnter = useCallback((cardId: string) => {
    setFlippedCardId(cardId)
  }, [])

  return (
    <section className="challenge-cards" data-module-id="challengeCards">
      <h2 className="section-title">{t.challengeCards.title}</h2>
      <div className="cards-grid">
        {t.challengeCards.cards.map((card, idx) => (
          <div
            key={card.id}
            ref={el => { if (el) cardRefs.current.set(card.id, el) }}
            className={`card-wrapper ${flippedCardId === card.id ? 'flipped' : ''} ${isTilting && !flippedCardId ? 'tilting' : ''}`}
            style={{'--card-index': idx, ...(!flippedCardId ? tiltStyle : {})} as React.CSSProperties}
            onMouseMove={e => handleMouseMove(e, card.id)}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-inner">
              <div className="card-face card-front">
                <div className="card-challenge-icon">⚠️</div>
                <h3 className="card-challenge">{card.challenge}</h3>
                <span className="flip-hint">Hover to see solution →</span>
              </div>
              <div className="card-face card-back">
                <div className="card-back-content">
                  <div className="card-solution-icon">✅</div>
                  <h3 className="card-solution">{card.solution}</h3>
                  <div className="card-code">
                    <pre>{card.codeSnippet}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
