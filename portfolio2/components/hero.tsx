'use client'

import { ArrowRight, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Projetos' },
  { value: '3+', label: 'Anos exp.' },
  { value: '100%', label: 'Entrega' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/gustavonunes', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/gustavonunes', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/gustavonunes', label: 'Instagram' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Photo */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute inset-0 border border-primary/20 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 border border-primary/10 rounded-2xl transform -rotate-2" />
              
              {/* Photo placeholder */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 bg-gradient-to-br from-secondary to-background rounded-2xl overflow-hidden border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Sua foto aqui</p>
                </div>
                
                {/* Decorative G */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[200px] font-bold text-primary/5 font-[family-name:var(--font-space-grotesk)]">G</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10" />
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
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="text-foreground">Gustavo</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Nunes</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Transformo ideias em{' '}
              <span className="text-primary font-medium">sites, landing pages</span> e{' '}
              <span className="text-primary font-medium">sistemas completos</span>.
              Do layout à API — resultado real, prazo e qualidade.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
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
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 group"
              >
                Ver projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-foreground border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                Solicitar orçamento
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 pt-8 border-t border-primary/10 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
      </div>
    </section>
  )
}
