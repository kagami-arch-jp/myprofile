import React, {useState, useEffect, useRef, useCallback} from 'react'
import './AboutContact.scss'
import { useI18n } from '@/i18n'
import ScrollReveal from '@/components/ScrollReveal'

export default function AboutContact() {
  const { t } = useI18n()
  const [selectedMilestone, setSelectedMilestone] = useState<typeof t.japaneseLearning.milestones[0] | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const learningContentRef = useRef<HTMLDivElement>(null)
  const milestoneRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const hasAutoSelectedN1 = useRef(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMilestoneClick = useCallback((milestone: typeof t.japaneseLearning.milestones[0]) => {
    setSelectedMilestone(milestone)
    const el = milestoneRefs.current.get(milestone.id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  useEffect(() => {
    const el = learningContentRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoSelectedN1.current) {
          hasAutoSelectedN1.current = true
          const n1Milestone = t.japaneseLearning.milestones.find(m => m.isN1)
          if (n1Milestone) {
            handleMilestoneClick(n1Milestone)
          }
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [t.japaneseLearning.milestones, handleMilestoneClick])

  return (
    <section className="about-contact" id="aboutContact" data-module-id="aboutContact">
      <h2 className="section-title">{t.japaneseLearning.title}</h2>

      <div className="learning-content" ref={learningContentRef}>
        <div className="progress-bar-container">
          <div className="progress-bar">
            {t.japaneseLearning.milestones.map((milestone, idx) => (
              <ScrollReveal
                key={milestone.id}
                animation="slideUp"
                delay={idx * 80}
              >
                <div
                  ref={(node) => {
                    if (node) {
                      milestoneRefs.current.set(milestone.id, node)
                    }
                  }}
                  className={`milestone ${milestone.isN1 ? 'milestone--n1' : ''} ${milestone.isStart ? 'milestone--start' : ''}`}
                  onClick={() => handleMilestoneClick(milestone)}
                >
                  <div className="milestone-dot" />
                  <div className="milestone-info">
                    <span className="milestone-period">{milestone.period}</span>
                    <span className="milestone-level">{milestone.level}</span>
                    {milestone.score && <span className="milestone-score">{t.japaneseLearning.scoreLabel}: {milestone.score}</span>}
                  </div>
                </div>
              </ScrollReveal>
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
           <span className="terminal-cursor">█</span>
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
