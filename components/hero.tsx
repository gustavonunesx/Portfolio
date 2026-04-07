'use client'

import { useCallback } from 'react'
import { ArrowRight, Linkedin, Github, Instagram } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Projetos' },
  { value: '2+', label: 'Anos exp.' },
  { value: '100%', label: 'Entrega' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/gustavo-ferreira-nunes', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/gustavonunesx', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/guh_nunesx', label: 'Instagram' },
]

const codeLines = [
  { indent: 0, parts: [{ text: 'const ', color: 'text-blue-400' }, { text: 'dev', color: 'text-foreground' }, { text: ' = {', color: 'text-foreground' }] },
  { indent: 1, parts: [{ text: 'nome', color: 'text-emerald-400' }, { text: ': ', color: 'text-foreground' }, { text: '"Gustavo Nunes"', color: 'text-yellow-300' }, { text: ',', color: 'text-foreground' }] },
  { indent: 1, parts: [{ text: 'cargo', color: 'text-emerald-400' }, { text: ': ', color: 'text-foreground' }, { text: '"Full-Stack Dev"', color: 'text-yellow-300' }, { text: ',', color: 'text-foreground' }] },
  { indent: 1, parts: [{ text: 'stack', color: 'text-emerald-400' }, { text: ': [', color: 'text-foreground' }, { text: '"React"', color: 'text-yellow-300' }, { text: ', ', color: 'text-foreground' }, { text: '"Next.js"', color: 'text-yellow-300' }, { text: ', ', color: 'text-foreground' }, { text: '"Node"', color: 'text-yellow-300' }, { text: '],', color: 'text-foreground' }] },
  { indent: 1, parts: [{ text: 'foco', color: 'text-emerald-400' }, { text: ': ', color: 'text-foreground' }, { text: '"Resultado real"', color: 'text-yellow-300' }, { text: ',', color: 'text-foreground' }] },
  { indent: 1, parts: [{ text: 'disponível', color: 'text-emerald-400' }, { text: ': ', color: 'text-foreground' }, { text: 'true', color: 'text-blue-400' }] },
  { indent: 0, parts: [{ text: '}', color: 'text-foreground' }] },
]

export default function Hero() {
  const smoothScrollTo = useCallback((targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      window.scrollTo(0, startPosition + distance * easeOutCubic(progress))
      if (timeElapsed < duration) requestAnimationFrame(animation)
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
  }, [smoothScrollTo])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Left - Code Window */}
          <div className="relative order-2 md:order-1 flex justify-center items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[420px]">

              {/* Badge - available */}
              <div className="absolute -top-5 -right-2 z-10 flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/25 rounded-full text-xs text-primary font-medium backdrop-blur-sm shadow-lg shadow-primary/5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Disponível para projetos
              </div>

              {/* Code Window */}
              <div className="relative bg-[#0a0a14]/90 backdrop-blur-sm border border-primary/15 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">

                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/10 bg-[#0d0d1a]">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-xs text-muted-foreground/60 font-mono">portfolio.ts</span>
                  <span className="ml-auto text-xs text-primary/50 font-mono">TypeScript</span>
                </div>

                {/* Code body */}
                <div className="p-6 font-mono text-sm leading-7 select-none">
                  {/* Comment */}
                  <div className="text-muted-foreground/40 text-xs mb-4">// Desenvolvedor Full-Stack</div>

                  {codeLines.map((line, i) => (
                    <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }}>
                      {line.parts.map((part, j) => (
                        <span key={j} className={part.color}>{part.text}</span>
                      ))}
                    </div>
                  ))}

                  {/* Terminal prompt */}
                  <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground/50">
                    <span className="text-primary/60">▶</span>
                    <span>dev.iniciando()</span>
                    <span className="w-2 h-4 bg-primary/60 rounded-sm animate-pulse" />
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-primary/10 bg-[#0d0d1a]">
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground/40 font-mono">
                    <span className="text-primary/50">●</span>
                    <span>TypeScript</span>
                    <span>UTF-8</span>
                  </div>
                  <span className="text-[10px] text-primary/40 font-mono">ln 7, col 1</span>
                </div>
              </div>

              {/* Badge - online */}
              <div className="absolute -bottom-5 -left-2 z-10 flex items-center gap-2 px-3 py-1.5 bg-[#0a0a14] border border-primary/15 rounded-full text-xs text-muted-foreground backdrop-blur-sm shadow-lg shadow-black/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online agora
              </div>

              {/* Decorative borders behind window */}
              <div className="absolute inset-0 border border-primary/8 rounded-2xl transform rotate-2 -z-10" />
              <div className="absolute inset-0 border border-primary/5 rounded-2xl transform -rotate-1 -z-10" />

              {/* Glow */}
              <div className="absolute -inset-8 bg-primary/4 blur-3xl rounded-full -z-20" />
            </div>
          </div>

          {/* Right - Text */}
          <div className="order-1 md:order-2 text-center md:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Desenvolvedor Web Full-Stack</span>
            </div>

            {/* Name */}
            <p className="text-muted-foreground mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Olá, eu sou
            </p>
            <h1
              className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-foreground">Gustavo</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Nunes</span>
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0 mb-8 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              Transformo ideias em{' '}
              <span className="text-primary font-medium">sites, landing pages</span> e{' '}
              <span className="text-primary font-medium">sistemas completos</span>.
              Do layout à API — resultado real, prazo e qualidade.
            </p>

            {/* Social Links */}
            <div
              className="flex justify-center md:justify-start gap-3 mb-8 animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 group"
              >
                Ver projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-foreground border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Solicitar orçamento
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex justify-center md:justify-start gap-8 pt-8 border-t border-primary/10 animate-fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
