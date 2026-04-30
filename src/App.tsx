import React, {useEffect, useState, useRef} from 'react'
import './App.scss'

import {useProgressiveEnhancement} from '@/hooks/useProgressiveEnhancement'
import {I18nProvider, LanguageSwitcher} from '@/i18n'

import Hero from '@/components/Hero'
import TechModules from '@/components/TechModules'
import JourneyTimeline from '@/components/JourneyTimeline'
import JapaneseLearning from '@/components/JapaneseLearning'
import OpenSourceShowcase from '@/components/OpenSourceShowcase'
import ChallengeCards from '@/components/ChallengeCards'
import Footer from '@/components/Footer'

export async function init() {}

function MouseGlow() {
  const [pos, setPos] = useState({x: -1000, y: -1000})

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({
      x: e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft || 0),
      y: e.clientY + (document.documentElement.scrollTop || document.body.scrollTop || 0),
    })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div
      className="mouse-glow"
      style={{left: pos.x, top: pos.y}}
    />
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', handler, {passive: true})
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{transform: `scaleX(${progress})`, width: '100vw'}}
    />
  )
}

export default function() {
  const {booted} = useProgressiveEnhancement()
  const [showDividers, setShowDividers] = useState(false)

  useEffect(() => {
    if (booted) {
      setTimeout(() => setShowDividers(true), 500)
    }
  }, [booted])

  return (
    <I18nProvider>
      <LanguageSwitcher />
      <MouseGlow />
      <ScrollProgress />
      <main className="app">
        <Hero booted={booted} />
        {booted && (
          <>
            {showDividers && <div className="section-divider" />}
            <TechModules />
            {showDividers && <div className="section-divider" />}
            <JourneyTimeline />
            {showDividers && <div className="section-divider" />}
            <JapaneseLearning />
            {showDividers && <div className="section-divider" />}
            <OpenSourceShowcase />
            {showDividers && <div className="section-divider" />}
            <ChallengeCards />
            {showDividers && <div className="section-divider" />}
            <Footer />
          </>
        )}
      </main>
    </I18nProvider>
  )
}
