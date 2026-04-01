'use client'

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      setTimeout(() => {
        if (menuRef.current) menuRef.current.scrollTop = 0
      }, 0)
    }
  }, [menuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveSection('')
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
    )

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const smoothScrollTo = useCallback((targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3)
    }

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)

      window.scrollTo(0, startPosition + distance * easedProgress)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 80
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight
      smoothScrollTo(targetPosition, 800)
    }
    setMenuOpen(false)
  }, [smoothScrollTo])

  const navClasses = scrolled
    ? 'py-4 bg-background/90 backdrop-blur-xl border-b border-primary/10'
    : 'py-6 bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-500 ease-out ${navClasses}`}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          smoothScrollTo(0, 800)
        }}
        className="group flex items-center font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight"
      >
        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">&lt;</span>
        <span className="text-primary mx-0.5 group-hover:scale-110 transition-transform duration-300 inline-block">G</span>
        <span className="text-foreground group-hover:text-primary transition-colors duration-300">Nunes</span>
        <span className="text-primary group-hover:text-foreground transition-colors duration-300">/</span>
        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">&gt;</span>
      </a>

      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((item, index) => (
          <li
            key={item.label}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-fade-up opacity-0 [animation-fill-mode:forwards]"
          >
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:ease-out ${activeSection === item.href ? 'text-foreground after:w-full' : 'text-muted-foreground after:w-0 hover:after:w-full'}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, '#contact')}
        className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95"
      >
        Falar comigo
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
        aria-label="Menu"
      >
        <div className="relative w-6 h-6">
          <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
          <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black/50 z-[90] md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-sm !bg-background z-[100] flex flex-col md:hidden overflow-hidden shadow-2xl transition-transform duration-500 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-primary">G</span>
            <span className="text-foreground">Nunes</span>
            <span className="text-primary">/</span>
            <span className="text-muted-foreground">&gt;</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col flex-1 p-6 gap-2 min-h-0 max-h-full overflow-y-auto">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`py-4 px-4 text-lg font-medium rounded-lg transition-colors duration-300 ${activeSection === item.href ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="p-6 border-t border-border">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center w-full py-4 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Falar comigo
          </a>
        </div>
      </div>
    </nav>
  )
}
