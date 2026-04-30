import React, {useState, useEffect} from 'react'
import './Footer.scss'
import { useI18n } from '@/i18n'

export default function Footer() {
  const { t } = useI18n()
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < t.footer.terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [visibleLines, t.footer.terminalLines.length])

  return (
    <footer className="footer" data-module-id="footer">
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-dot terminal-dot--red" />
          <span className="terminal-dot terminal-dot--yellow" />
          <span className="terminal-dot terminal-dot--green" />
          <span className="terminal-title">connection</span>
        </div>
        <div className="terminal-body">
          {t.footer.terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="terminal-line">
              <span className="terminal-prompt">{line.startsWith('>') ? '>' : ''}</span>
              <span className="terminal-text">{line.replace(/^>\s*/, '')}</span>
            </div>
          ))}
          {visibleLines >= t.footer.terminalLines.length && (
            <div className="terminal-line">
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      </div>
      <div className="footer-links">
        {t.footer.contact.github.url && (
          <a href={t.footer.contact.github.url} target="_blank" rel="noopener noreferrer" className="footer-link">
            <span className="link-icon">⌨️</span>
            <span>{t.footer.contact.github.label}</span>
          </a>
        )}
        {t.footer.contact.email.address && (
          <a href={`mailto:${t.footer.contact.email.address}`} className="footer-link">
            <span className="link-icon">✉️</span>
            <span>{t.footer.contact.email.label}</span>
          </a>
        )}
      </div>
      <div className="footer-pulse">
        <div className="pulse-ring" />
      </div>
    </footer>
  )
}
