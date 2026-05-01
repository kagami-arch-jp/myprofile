import React, {useState} from 'react'
import './JourneyTimeline.scss'
import { useI18n } from '@/i18n'

export default function JourneyTimeline() {
  const { t } = useI18n()
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({})

  const handleNodeClick = (nodeId: string, event: React.MouseEvent) => {
    const nodeElement = (event.currentTarget as HTMLElement).closest('.timeline-node') as HTMLElement
    if (nodeElement) {
      nodeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="journey-timeline" data-module-id="journeyTimeline">
      <h2 className="section-title">{t.journeyTimeline.title}</h2>
      <div className="timeline">
        <div className="timeline-line" />
        {t.journeyTimeline.nodes.map((node, idx) => (
          <div
            key={node.id}
            className={`timeline-node ${node.isTransition ? 'timeline-node--transition' : ''}`}
             style={{'--node-index': String(idx)} as any}
          >
            <div className="timeline-dot">
              {node.isTransition && <span className="dot-icon">{node.transitionIcon}</span>}
            </div>
            <div className={`timeline-card ${expandedIds[node.id] ? 'expanded' : ''}`}>
              <div
                 className="timeline-card-header"
                 onClick={(e) => {
                   !expandedIds[node.id] && handleNodeClick(node.id, e)
                   setExpandedIds(prev=>({
                     ...prev,
                     [node.id]: !prev[node.id],
                   }))
                 }}
               >
                <div className="card-period">{node.period}</div>
                <div className="card-company">
                  {node.companyUrl ? (
                    <a href={node.companyUrl} target="_blank" rel="noopener noreferrer" className="company-name" onClick={e => e.stopPropagation()}>
                      {node.company}
                      <span className="company-link-icon">↗</span>
                    </a>
                  ) : (
                    <span className="company-name">{node.company}</span>
                  )}
                  <span className="company-en">{node.companyLocal}</span>
                </div>
                <div className="card-role">{node.role}</div>
              </div>
              <div className="timeline-card-body">
                <p className="card-location">📍 {node.location}</p>
                <p className="card-description">{node.description}</p>
                <div className="card-tags">
                  {node.tags.map((tag, tagIdx) => (
                    <span key={tag} className="tag" style={{transitionDelay: `${tagIdx * 60}ms`}}>{tag}</span>
                  ))}
                </div>
                {node.architecture && (
                  <div className="card-architecture">
                    <h4>Architecture</h4>
                    <p><strong>Pattern:</strong> {node.architecture.pattern}</p>
                    <p>{node.architecture.description}</p>
                    <p><strong>Build:</strong> {node.architecture.buildStrategy}</p>
                  </div>
                )}
                {node.badges && node.badges.length > 0 && (
                  <div className="card-badges">
                    {node.badges.map(badge => (
                      <div key={badge.id} className="badge">
                        <span className="badge-icon">{badge.icon}</span>
                        <div className="badge-content">
                          <span className="badge-label">{badge.label}</span>
                          <span className="badge-desc">{badge.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="timeline-transition-note">{t.journeyTimeline.transitionNote}</p>
    </section>
  )
}
