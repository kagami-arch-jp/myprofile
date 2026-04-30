import {useState, useEffect} from 'react'

export function useProgressiveEnhancement() {
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('is-booted')
      setBooted(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!booted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('module-visible')
          }
        })
      },
      {threshold: 0.1}
    )

    document.querySelectorAll('[data-module-id]').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [booted])

  return {booted}
}
