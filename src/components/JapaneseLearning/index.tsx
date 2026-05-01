import React, { useState, useRef, useEffect } from 'react'
import './JapaneseLearning.scss'
import { useI18n } from '@/i18n'

function useScoreAnimation(targetScore: number | undefined) {
  const [displayScore, setDisplayScore] = useState(0)
  useEffect(() => {
    if (targetScore === undefined) {
      setDisplayScore(0)
      return
    }
    let frame: number
    const duration = 1200
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayScore(Math.round(eased * targetScore))
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [targetScore])
  return displayScore
}

export default function JapaneseLearning() {
  const { t } = useI18n()
  const [activeId, setActiveId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const activeMilestone = t.japaneseLearning.milestones.find(m => m.id === activeId)
  const animatedScore = useScoreAnimation(activeMilestone?.score)

  const handleNodeClick = (milestoneId: string, event: React.MouseEvent) => {
    setActiveId(activeId === milestoneId ? null : milestoneId)

    if (scrollContainerRef.current) {
      const nodeElement = event.currentTarget as HTMLElement
      const container = scrollContainerRef.current
      const nodeRect = nodeElement.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      const nodeCenter = nodeRect.left + nodeRect.width / 2
      const containerCenter = containerRect.left + containerRect.width / 2
      const scrollLeft = container.scrollLeft
      const targetScrollLeft = scrollLeft + (nodeCenter - containerCenter)

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (!activeId) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      if (!target) return
      // 检查点击的是否为当前激活的 node 内部
      const activeNode = document.querySelector('.progress-node.active')
      if (activeNode && activeNode.contains(target)) {
        return
      }
      setActiveId(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [activeId])

  const milestones = t.japaneseLearning.milestones
  const totalNodes = milestones.length
  const scoredNodes = milestones.filter(m => m.score !== undefined)
  const maxScore = Math.max(...scoredNodes.map(m => m.score || 0))

  // N1节点索引和延长线计算
  const n1Index = milestones.findIndex(m => m.isN1)
  const continuingIndex = milestones.findIndex(m => m.id === 'continuing')
  const segmentWidth = 100 / (totalNodes - 1)
  const activeIndex = activeId ? milestones.findIndex(m => m.id === activeId) : (n1Index >= 0 ? n1Index : 0)

  return (
    <section className="japanese-learning" data-module-id="japaneseLearning" ref={sectionRef}>
      <h2 className="section-title">{t.japaneseLearning.title}</h2>
      <div className="progress-bar-wrapper" ref={scrollContainerRef}>
        <div className="progress-track">
          {milestones.map((milestone, idx) => {
            const isStart = milestone.isStart
            const segmentWidth = 100 / (totalNodes - 1)
            const left = idx * segmentWidth

            return (
                <div
                 key={milestone.id}
                 className={`progress-node ${activeId === milestone.id ? 'active' : ''} ${milestone.isN1 ? 'n1-node' : ''}`}
                 style={{ left: `${left}%`, width: `${segmentWidth}%` }}
                 onClick={(e) => handleNodeClick(milestone.id, e)}
               >
                 <div className="node-dot">
                   {isStart && <span className="dot-icon">🌸</span>}
                   {milestone.isN1 && <span className="n1-sparkle"></span>}
                 </div>
                <div className="node-label">
                  <span className="node-period">{milestone.period}</span>
                  <span className="node-level">{milestone.level}</span>
                </div>
                {milestone.score !== undefined && (
                  <div className="node-score">
                    <div className="score-bar" style={{ width: `${(milestone.score / maxScore) * 100}%` }} />
                    <span className="score-text">{milestone.score}</span>
                  </div>
                )}
                <div className="node-popup">
                  <p className="popup-desc">{milestone.description}</p>
                  {milestone.details && (
                    <ul>
                      {milestone.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                  {milestone.score !== undefined && (
                    <div className="popup-score animated-score">
                      <span>{t.japaneseLearning.scoreLabel || 'Score'}: </span><strong>{animatedScore}</strong>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          <div className="progress-line">
            <div className="progress-fill" style={{ width: `${((activeIndex) / (totalNodes - 1)) * 100}%` }} />
            {n1Index >= 0 && continuingIndex > n1Index && (
              <div
                className="continuing-line"
                style={{
                  left: `${(n1Index / (totalNodes - 1)) * 100}%`,
                  width: `${((continuingIndex - n1Index) / (totalNodes - 1)) * 100}%`
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
