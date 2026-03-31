import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoBracket}>&lt;</span>
        GN
        <span className={styles.logoBracket}>/&gt;</span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {[
          { label: 'serviços', href: '#services' },
          { label: 'projetos', href: '#projects' },
          { label: 'sobre',    href: '#about' },
          { label: 'contato',  href: '#contact' },
        ].map((item, i) => (
          <li key={item.label}>
            <a href={item.href} onClick={() => setMenuOpen(false)}>
              <span className={styles.linkNum}>0{i + 1}.</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:gustavo@email.com" className={styles.cta}>
        Falar comigo
      </a>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}