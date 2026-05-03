import React, { useState, useCallback } from 'react'
import createSharedState from 'react-cross-component-state'
import './TechCapability.scss'
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

const sptcDemos = [
  {
    id: 'autoload',
    name: 'Auto-loading (__autoload)',
    description: 'PHP-style autoload function to lazy-load modules on first access',
    code: '<?js\n__autoload(name => {\n  if (name.startsWith(\'Model_\')) {\n    return \'./models/\' + name + \'.s\';\n  }\n});\nconst user = Model_User;\necho(\'Loaded: \' + user.name);\n?>',
  },
  {
    id: 'webpack-loader',
    name: 'Webpack Loader',
    description: 'Use sptc as a webpack loader to preprocess JS/JSX files',
    code: '// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [{\n      test: /\\.(jsx?)$/,\n      loader: \'sptc/dist/webpack.loader.js\',\n      options: {\n        file: path.resolve(__dirname, \'sptc.inject.js\'),\n      },\n    }],\n  },\n};',
  },
]

function CounterComponent({ label, onLog }: { label: string; onLog: (e: LogEntry) => void }) {
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
      component: `Component ${label}`,
    })
  }

  return (
    <div className={`counter-component counter-${label.toLowerCase()}`}>
      <span className="comp-label">Component {label}</span>
      <div className={`counter-value ${bump ? 'bump' : ''}`} style={{ color: theme }}>
        {count}
      </div>
      <div className="counter-btns">
        <button onClick={() => handle(-1)}>-</button>
        <button onClick={() => handle(1)}>+</button>
      </div>
    </div>
  )
}

function ThemeSelector({ onLog }: { onLog: (e: LogEntry) => void }) {
  const theme = sharedTheme.useValue()

  const handle = (color: string) => {
    const prev = sharedTheme.getValue()
    sharedTheme.setValue(color)
    onLog({
      time: new Date().toTimeString().slice(0, 8),
      stateName: 'sharedTheme',
      oldVal: prev,
      newVal: color,
      component: 'ThemeSelector',
    })
  }

  return (
    <div className="theme-demo">
      <div className="theme-grid">
        {colors.map((color) => (
          <button
            key={color}
            className={`theme-btn ${theme === color ? 'active' : ''}`}
            style={{ background: color }}
            onClick={() => handle(color)}
          />
        ))}
      </div>
    </div>
  )
}

export default function TechCapability() {
  const { t } = useI18n()
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [activeTab, setActiveTab] = useState<'techStack' | 'rccs' | 'sptc'>('techStack')
  const [activeScenario, setActiveScenario] = useState(0)

  const addLog = useCallback((entry: LogEntry) => {
    setLogs((prev) => [...prev.slice(-20), entry])
  }, [])

  return (
    <section className="tech-capability" id="techCapability" data-module-id="techCapability">
      <h2 className="section-title">{t.techModules.title}</h2>

      <div className="capability-tabs">
        <button
          className={`capability-tab ${activeTab === 'techStack' ? 'active' : ''}`}
          onClick={() => { setActiveTab('techStack'); setLogs([]) }}
        >
          <span className="tab-icon">⚛️</span>
          <span className="tab-name">Tech Stack</span>
        </button>
        <button
          className={`capability-tab ${activeTab === 'rccs' ? 'active' : ''}`}
          onClick={() => { setActiveTab('rccs'); setLogs([]) }}
        >
          <span className="tab-icon">📡</span>
          <span className="tab-name">react-cross-component-state</span>
          <a
            href="https://github.com/kagami-arch-jp/react-cross-component-state/"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
            onClick={(e) => e.stopPropagation()}
          >
            ↗
          </a>
        </button>
        <button
          className={`capability-tab ${activeTab === 'sptc' ? 'active' : ''}`}
          onClick={() => { setActiveTab('sptc'); setLogs([]) }}
        >
          <span className="tab-icon">⚡</span>
          <span className="tab-name">sptc</span>
          <a
            href="https://github.com/kagami-arch-jp/sptc"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
            onClick={(e) => e.stopPropagation()}
          >
            ↗
          </a>
        </button>
      </div>

      {activeTab === 'techStack' && (
        <div className="tech-grid">
          {t.techModules.cards.map((card, idx) => (
            <div key={card.id} className={`tech-card tech-card--${card.size}`} style={{ '--card-index': idx } as React.CSSProperties}>
              <div className="tech-card-icon">{card.icon}</div>
              <h3 className="tech-card-name">{card.name}</h3>
              <p className="tech-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'rccs' && (
        <div className="demo-layout">
          <div className="demo-diagram">
            <h3>Observer Pattern Architecture</h3>
            <div className="diagram-visual">
              <svg className="diagram-lines" viewBox="-150 -100 300 200">
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i * Math.PI * 2) / 4 - Math.PI / 2
                  const x = Math.cos(angle) * 120
                  const y = Math.sin(angle) * 80
                  return (
                    <g key={i}>
                      <line x1="0" y1="0" x2={x} y2={y}>
                        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
                      </line>
                      <circle r="3">
                        <animateMotion dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" path={`M0,0 L${x},${y}`} />
                      </circle>
                    </g>
                  )
                })}
              </svg>
              <div className="diagram-hub">
                <span>Observer</span>
              </div>
              {['Component A', 'Component B', 'Component C', 'Component D'].map((label, i) => {
                const angle = (i * Math.PI * 2) / 4 - Math.PI / 2
                const x = Math.cos(angle) * 120
                const y = Math.sin(angle) * 80
                return (
                  <div key={i} className="diagram-node" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                    {label}
                  </div>
                )
              })}
            </div>
            <div className="diagram-principles">
              {t.stateEngineDemo.designPrinciples.map((principle) => (
                <div key={principle.title} className="principle">
                  <strong>{principle.title}</strong>
                  <p>{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="demo-interactive">
            <h3>Live Demo</h3>
            <div className="counter-demo">
              <div className="counter-grid">
                {['A', 'B', 'C'].map((label) => (
                  <CounterComponent key={label} label={label} onLog={addLog} />
                ))}
              </div>
              <ThemeSelector onLog={addLog} />
            </div>
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
      )}

      {activeTab === 'sptc' && (
        <div className="sptc-showcase">
          <div className="sptc-demo-list">
            {sptcDemos.map((demo, idx) => (
              <div
                key={demo.id}
                className={`sptc-demo-card ${activeScenario === idx ? 'active' : ''}`}
                onClick={() => setActiveScenario(idx)}
              >
                <h4>{demo.name}</h4>
                <p>{demo.description}</p>
              </div>
            ))}
            <div className="sptc-more-info">
              <p>{t.openSourceShowcase.sptcMoreFeatures}</p>
              <a href="https://www.npmjs.com/package/sptc" target="_blank" rel="noopener noreferrer" className="npm-link">
                <span>{t.openSourceShowcase.sptcViewDocs}</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>
          </div>
          <div className="sptc-code-viewer">
            <div className="code-header">
              <span className="code-filename">{sptcDemos[activeScenario].id}.s</span>
            </div>
            <pre className="code-block"><code>{sptcDemos[activeScenario].code}</code></pre>
          </div>
        </div>
      )}
    </section>
  )
}
