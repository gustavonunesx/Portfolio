'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-background/90 backdrop-blur-xl border-b border-primary/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-1 font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-foreground">
        <span className="text-primary">G</span>
        <span>Nunes</span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="mailto:gustavo@email.com"
        className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
      >
        Falar comigo
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-foreground"
        aria-label="Menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href="mailto:gustavo@email.com"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg"
        >
          Falar comigo
        </a>
      </div>
    </nav>
  )
}
