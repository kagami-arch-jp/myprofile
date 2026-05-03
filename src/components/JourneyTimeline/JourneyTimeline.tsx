import React, {useState, useEffect} from 'react';
import './JourneyTimeline.scss'
import { useI18n } from '@/i18n'
import Modal from '@/components/Modal'

export default function JourneyTimeline() {
  const { t } = useI18n()
  const [selectedNode, setSelectedNode] = useState<typeof t.journeyTimeline.nodes[0] | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNodeClick = (node: typeof t.journeyTimeline.nodes[0]) => {
    setSelectedNode(node)
  }

  return (
    <section className="journey-timeline" id="journeyTimeline" data-module-id="journeyTimeline">
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
            <div
              className="timeline-card"
              onClick={() => handleNodeClick(node)}
            >
              <div className="timeline-card-header">
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
              <div className="timeline-card-summary">
                <p className="card-location">📍 {node.location}</p>
                <p className="card-description">{node.description}</p>
                <div className="card-tags">
                  {node.tags.map((tag, tagIdx) => (
                    <span key={tag} className="tag" style={{transitionDelay: `${tagIdx * 60}ms`}}>{tag}</span>
                  ))}
                </div>
                <span className="view-detail-hint">Click to view details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="timeline-transition-note">{t.journeyTimeline.transitionNote}</p>

      <Modal
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
        title={selectedNode?.company || ''}
        fullScreen={isMobile}
      >
        {selectedNode && (
          <div className="modal-node-detail">
            <div className="detail-header">
              <div className="detail-period">{selectedNode.period}</div>
              <div className="detail-company">
                {selectedNode.companyLocal}
                {selectedNode.companyUrl && (
                  <a href={selectedNode.companyUrl} target="_blank" rel="noopener noreferrer" className="detail-link">
                    {selectedNode.company} ↗
                  </a>
                )}
              </div>
              <div className="detail-role">{selectedNode.role}</div>
            </div>
            <p className="detail-location">📍 {selectedNode.location}</p>
            <p className="detail-description">{selectedNode.description}</p>
            <div className="detail-tags">
              {selectedNode.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            {selectedNode.architecture && (
              <div className="detail-architecture">
                <h4>Architecture</h4>
                <p><strong>Pattern:</strong> {selectedNode.architecture.pattern}</p>
                <p>{selectedNode.architecture.description}</p>
                <p><strong>Build:</strong> {selectedNode.architecture.buildStrategy}</p>
              </div>
            )}
            {selectedNode.badges && selectedNode.badges.length > 0 && (
              <div className="detail-badges">
                {selectedNode.badges.map(badge => (
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
        )}
      </Modal>
    </section>
  )
}
