import React, {useState, useCallback} from 'react'
import createSharedState from 'react-cross-component-state'
import './StateEngineDemo.scss'
import { useI18n } from '@/i18n'

const sharedCounter = createSharedState(0)
const sharedTheme = createSharedState('#00E5FF')

const colors = ['#00E5FF', '#FF006E', '#7C4DFF', '#00E676']

interface LogEntry {
  time: string
  stateName: string
  oldVal: string | number
  newVal: string | number
  component: string
}

function CounterComponent({label, onLog}: {label: string; onLog: (e: LogEntry) => void}) {
  const count = sharedCounter.useValue()
  const theme = sharedTheme.useValue()
  const [bump, setBump] = useState(false)

  const handle = (delta: number) => {
    const prev = sharedCounter.getValue()
    const next = prev + delta
    sharedCounter.setValue(next)
    setBump(true)
    setTimeout(() => setBump(false), 300)
    onLog({
      time: new Date().toTimeString().slice(0, 8),
      stateName: 'sharedCounter',
      oldVal: prev,
      newVal: next,
      component: `Component ${label}`
    })
  }

  return (
    <div className={`counter-component counter-${label.toLowerCase()}`}>
      <span className="comp-label">Component {label}</span>
      <div className={`counter-value ${bump ? 'bump' : ''}`} style={{color: theme}}>{count}</div>
      <div className="counter-btns">
        <button onClick={() => handle(-1)}>-</button>
        <button onClick={() => handle(1)}>+</button>
      </div>
    </div>
  )
}

function ThemeSelector({onLog}: {onLog: (e: LogEntry) => void}) {
  const theme = sharedTheme.useValue()

  const handle = (color: string) => {
    const prev = sharedTheme.getValue()
    sharedTheme.setValue(color)
    onLog({
      time: new Date().toTimeString().slice(0, 8),
      stateName: 'sharedTheme',
      oldVal: prev,
      newVal: color,
      component: 'ThemeSelector'
    })
  }

  return (
    <div className="theme-demo">
      <div className="theme-grid">
        {colors.map(color => (
          <button
            key={color}
            className={`theme-btn ${theme === color ? 'active' : ''}`}
            style={{background: color}}
            onClick={() => handle(color)}
          />
        ))}
      </div>
      <div className="theme-preview" style={{borderColor: theme}}>
        <span style={{color: theme}}>Preview</span>
        <p style={{color: `${theme}80`}}>All components react to theme change</p>
      </div>
    </div>
  )
}

function ThemePreview() {
  const theme = sharedTheme.useValue()
  return (
    <div className="theme-preview" style={{borderColor: theme, marginTop: 15}}>
      <span style={{color: theme}}>Preview</span>
      <p style={{color: `${theme}80`}}>All components react to theme change</p>
    </div>
  )
}

export default function StateEngineDemo() {
  const { t } = useI18n()
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [activeScenario, setActiveScenario] = useState(0)

  const addLog = useCallback((entry: LogEntry) => {
    setLogs(prev => [...prev.slice(-20), entry])
  }, [])

  return (
    <section className="state-engine-demo" data-module-id="stateEngineDemo">
      <h2 className="section-title">{t.stateEngineDemo.title}</h2>
      <p className="section-desc">{t.stateEngineDemo.description}</p>
      <div className="package-link-wrapper">
        <a
          href={t.stateEngineDemo.packageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="package-link"
        >
          <span className="package-icon">⌨️</span>
          <span className="package-name">{t.stateEngineDemo.packageName}</span>
          <span className="link-arrow">↗</span>
        </a>
      </div>
      <div className="demo-layout">
        <div className="demo-diagram">
          <h3>{t.stateEngineDemo.architectureDiagram.title}</h3>
          <div className="diagram-visual">
            <div className="diagram-hub">
              <span>Observer</span>
              <svg className="diagram-lines" viewBox="-150 -100 300 200">
                {t.stateEngineDemo.architectureDiagram.nodes
                  .filter(n => n.type === 'component')
                  .map((node, i) => {
                    const angle = (i * Math.PI * 2) / 4 - Math.PI / 2
                    const x = Math.cos(angle) * 120
                    const y = Math.sin(angle) * 80
                    return (
                      <g key={node.id}>
                        <line x1="0" y1="0" x2={x} y2={y}>
                          <animate
                            attributeName="stroke-dashoffset"
                            from="20"
                            to="0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </line>
                        <circle r="3">
                          <animateMotion
                            dur={`${1.5 + i * 0.3}s`}
                            repeatCount="indefinite"
                            path={`M0,0 L${x},${y}`}
                          />
                        </circle>
                      </g>
                    )
                  })}
              </svg>
            </div>
            {t.stateEngineDemo.architectureDiagram.nodes
              .filter(n => n.type === 'component')
              .map((node, i) => {
                const angle = (i * Math.PI * 2) / 4 - Math.PI / 2
                const x = Math.cos(angle) * 120
                const y = Math.sin(angle) * 80
                return (
                  <div key={node.id} className="diagram-node" style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}>
                    {node.label}
                  </div>
                )
              })}
          </div>
          <div className="diagram-principles">
            {t.stateEngineDemo.designPrinciples.map(principle => (
              <div key={principle.title} className="principle">
                <strong>{principle.title}</strong>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="demo-interactive">
          <h3>Live Demo</h3>
          <div className="scenario-tabs">
            {t.stateEngineDemo.demo.scenarios.map((scenario, idx) => (
              <button
                key={scenario.id}
                className={`scenario-tab ${activeScenario === idx ? 'active' : ''}`}
                onClick={() => setActiveScenario(idx)}
              >
                {scenario.name}
              </button>
            ))}
          </div>
          {activeScenario === 0 && (
            <div className="counter-demo">
              <div className="counter-grid">
                {['A', 'B', 'C'].map(label => (
                  <CounterComponent key={label} label={label} onLog={addLog} />
                ))}
              </div>
            </div>
          )}
          {activeScenario === 1 && (
            <div>
              <ThemeSelector onLog={addLog} />
              <ThemePreview />
            </div>
          )}
          <div className="demo-log">
            <h4>State Event Log</h4>
            <div className="log-content">
              {logs.length === 0 ? (
                <p className="log-empty">Click buttons to see state changes...</p>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="log-entry">
                    [{log.time}] {log.stateName}: {log.oldVal} → {log.newVal} (from {log.component})
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
