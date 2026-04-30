import React from 'react'
import './TechModules.scss'
import { useI18n } from '@/i18n'

export default function TechModules() {
  const { t } = useI18n()
  return (
    <section className="tech-modules" data-module-id="techModules">
      <h2 className="section-title">{t.techModules.title}</h2>
      <div className="bento-grid">
        {t.techModules.cards.map((card, idx) => (
          <div
            key={card.id}
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
