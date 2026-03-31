'use client'

import { useState, useEffect, useCallback } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section for highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    )

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Custom smooth scroll with easing for better control
  const smoothScrollTo = useCallback((targetPosition: number, duration: number = 1000) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    // Easing function for smooth deceleration
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

  // Smooth scroll handler
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-4 bg-background/90 backdrop-blur-xl border-b border-primary/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      {/* Logo Animada */}
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

      {/* Desktop Links */}
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
              className={`relative text-sm font-medium transition-all duration-300 hover:text-foreground
                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary 
                after:transition-all after:duration-300 after:ease-out
                ${activeSection === item.href 
                  ? 'text-foreground after:w-full' 
                  : 'text-muted-foreground after:w-0 hover:after:w-full'
                }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, '#contact')}
        className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg 
          hover:bg-primary/90 transition-all duration-300 ease-out
          hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95"
      >
        Falar comigo
      </a>

      {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-out md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            style={{ 
              transitionDelay: menuOpen ? `${index * 75}ms` : '0ms',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0
            }}
            className={`text-2xl font-medium transition-all duration-300 ease-out
              ${activeSection === item.href ? 'text-primary' : 'text-foreground hover:text-primary'}`}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          style={{ 
            transitionDelay: menuOpen ? `${navLinks.length * 75}ms` : '0ms',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: menuOpen ? 1 : 0
          }}
          className="mt-4 px-8 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg
            hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Falar comigo
        </a>
      </div>
    </nav>
  )
}
