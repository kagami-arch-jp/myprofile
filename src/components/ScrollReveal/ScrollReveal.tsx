import React, { useState, useEffect, useRef } from 'react'
import './ScrollReveal.scss'

interface ScrollRevealProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
  className?: string
}

export default function ScrollReveal({
  children,
  threshold = 0.1,
  delay = 0,
  animation = 'fadeIn',
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, delay])

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${animation} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
