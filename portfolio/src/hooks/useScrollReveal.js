import { useEffect } from 'react'

/**
 * useScrollReveal
 * Observa todos os elementos com as classes .reveal, .reveal-left, .reveal-right
 * e adiciona .visible quando entram na viewport.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.07 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}