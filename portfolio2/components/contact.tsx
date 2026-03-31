'use client'

import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react'

const channels = [
  {
    label: 'WhatsApp',
    value: '+55 (16) 98109-4196',
    href: 'https://wa.me/5516981094196',
    icon: MessageCircle,
    color: '#25d366',
  },
  {
    label: 'Email',
    value: 'gu.nunesx@gmail.com',
    href: 'gu.nunesx@gmail.com',
    icon: Mail,
    color: '#10b981',
  },
  {
    label: 'LinkedIn',
    value: '/in/gustavo-ferreira-nunes',
    href: 'https://linkedin.com/in/gustavo-ferreira-nunes',
    icon: Linkedin,
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    value: 'github.com/gustavonunesx',
    href: 'https://github.com/gustavonunesx',
    icon: Github,
    color: '#ffffff',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-secondary/30">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs text-primary uppercase tracking-widest mb-4">
            <span className="text-primary/40">//</span> Contato
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">conversar.</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Tem um projeto em mente ou quer bater um papo sobre tecnologia?
            Me encontre em qualquer uma dessas plataformas.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {channels.map((channel, index) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="group relative flex items-center gap-5 p-5 bg-card/50 border border-primary/10 rounded-xl text-left hover:bg-primary/5 hover:border-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Left accent line */}
              <div
                className="absolute left-0 top-[15%] bottom-[15%] w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: channel.color }}
              />
              
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg shrink-0"
                style={{
                  backgroundColor: `${channel.color}15`,
                  border: `1px solid ${channel.color}30`,
                }}
              >
                <channel.icon className="w-5 h-5" style={{ color: channel.color }} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="block font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-foreground mb-0.5">
                  {channel.label}
                </span>
                <span className="block text-xs text-muted-foreground truncate">
                  {channel.value}
                </span>
              </div>

              {/* Arrow */}
              <span className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-sm text-muted-foreground">
            Prefere mandar uma mensagem direta?
          </p>
          <a
            href="mailto:gu.nunesx@gmail.com?subject=Quero um orçamento"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-xl hover:shadow-primary/25"
          >
            Solicitar orçamento gratuito →
          </a>
        </div>
      </div>
    </section>
  )
}
