import React, {createContext, useContext, useState, useEffect, useRef, type ReactNode} from 'react'
import type {I18nProfileData} from '@/types/profile'
import en from './en'
import ja from './ja'
import zh from './zh'

const languages: Record<string, I18nProfileData> = {en, ja, zh}

interface I18nContextType {
  lang: string
  switchLang: (lang: string) => void
  t: I18nProfileData
}

const I18nContext = createContext<I18nContextType | null>(null)

function getCookieLang(): string {
  return 'ja'
  /*
  if (typeof document === 'undefined') return 'en'
  const match = document.cookie.match(/(?:^|; )lang=(en|ja|zh)(?:;|$)/)
  return match ? match[1] : 'en'
  */
}

function setCookieLang(lang: string) {
  /*
  if (typeof document === 'undefined') return
  document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`
  */
}

export function I18nProvider({children}: {children: ReactNode}) {
  const [lang, setLang] = useState(() => getCookieLang())

  const switchLang = (newLang: string) => {
    if (languages[newLang]) {
      setLang(newLang)
      setCookieLang(newLang)
    }
  }

  return (
    <I18nContext.Provider value={{lang, switchLang, t: languages[lang]}}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function LanguageSwitcher() {
  const {lang, switchLang} = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const options = [
    {code: 'en', label: 'EN', name: 'English'},
    {code: 'ja', label: '日本語', name: 'Japanese'},
    {code: 'zh', label: '中文', name: 'Chinese'}
  ]

  return (
    <div className="lang-switcher" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        <span className="lang-label">{options.find(o => o.code === lang)?.label}</span>
        <span className={`lang-arrow ${open ? 'open' : ''}`}>▾</span>
      </button>
      {open && (
        <div className="lang-dropdown">
          {options.map(opt => (
            <button
              key={opt.code}
              className={`lang-option ${lang === opt.code ? 'active' : ''}`}
              onClick={() => {
                switchLang(opt.code)
                setOpen(false)
              }}
              title={opt.name}
            >
              <span className="lang-opt-label">{opt.label}</span>
              <span className="lang-opt-name">{opt.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
