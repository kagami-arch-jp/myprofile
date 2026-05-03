import React, {useState, useEffect} from 'react'
import './AboutContact.scss'
import { useI18n } from '@/i18n'

export default function AboutContact() {
  const { t } = useI18n()
  const [selectedMilestone, setSelectedMilestone] = useState<typeof t.japaneseLearning.milestones[0] | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="about-contact" id="aboutContact" data-module-id="aboutContact">
      <h2 className="section-title">{t.japaneseLearning.title}</h2>

      <div className="learning-content">
        <div className="progress-bar-container">
          <div className="progress-bar">
            {t.japaneseLearning.milestones.map((milestone, idx) => (
              <div
                key={milestone.id}
                className={`milestone ${milestone.isN1 ? 'milestone--n1' : ''} ${milestone.isStart ? 'milestone--start' : ''}`}
                onClick={() => setSelectedMilestone(milestone)}
              >
                <div className="milestone-dot" />
                <div className="milestone-info">
                  <span className="milestone-period">{milestone.period}</span>
                  <span className="milestone-level">{milestone.level}</span>
                  {milestone.score && <span className="milestone-score">{t.japaneseLearning.scoreLabel}: {milestone.score}</span>}
                </div>
              </div>
            ))}
            <div className="progress-line" />
          </div>
        </div>

        {selectedMilestone && (
          <div className="milestone-detail">
            <h3>{selectedMilestone.level}</h3>
            <p className="detail-period">{selectedMilestone.period}</p>
            <p className="detail-desc">{selectedMilestone.description}</p>
            {selectedMilestone.details && (
              <ul className="detail-list">
                {selectedMilestone.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="footer-terminal">
        <div className="terminal-header">~/contact</div>
        <div className="terminal-body">
          {t.footer.terminalLines.map((line, idx) => (
            <div key={idx} className="terminal-line">
              <span className="terminal-prompt">$</span> {line}
            </div>
          ))}
        </div>
        <div className="terminal-contacts">
          <a href={t.footer.contact.github.url} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">⚡</span>
            <span>{t.footer.contact.github.label}</span>
            <span className="link-arrow">↗</span>
          </a>
          <a href={`mailto:${t.footer.contact.email.address}`} className="contact-link">
            <span className="contact-icon">✉</span>
            <span>{t.footer.contact.email.label}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
