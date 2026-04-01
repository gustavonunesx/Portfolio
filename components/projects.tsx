'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    tag: 'Sistema Backend Completo',
    name: 'CineVibe',
    desc: 'Sistema completo de gerenciamento de cinema desenvolvido com Spring Boot, oferecendo funcionalidades de gestão de filmes, sessões, reservas de assentos e análise de dados (analytics).',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL 8.0' ],
    github: 'https://github.com/gustavonunesx/Cinema-Project.git',
    demo: '#',
    screenshot: '/cinevibe/cinevibe.png',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    tag: 'E-commerce',
    name: 'Sistema de Gestão para Pastelaria',
    desc: 'Sistema completo full-stack para gerenciamento de uma pastelaria, com cardápio digital, pedidos pelo WhatsApp, painel administrativo e controle financeiro em tempo real.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Supabase Auth', 'Supabase Realtime'],
    github: 'https://github.com/gustavonunesx/E-commerce_Full_Project.git',
    demo: 'https://e-commerce-full-project-pmqj-dkcbdrumf-gustavonunesxs-projects.vercel.app/',
    screenshot: '/pastelaria/image.png',
    color: 'from-primary/20 to-emerald-500/20',
  },
  
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-secondary/30">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs text-primary uppercase tracking-widest mb-4">
            <span className="text-primary/40">//</span> Meus Projetos
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que eu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">construí.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Uma seleção de trabalhos reais
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-card border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Preview */}
              <div className="relative aspect-video bg-gradient-to-br from-secondary to-card overflow-hidden">
                {project.screenshot ? (
                  <img src={project.screenshot} alt={project.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex flex-col p-5">
                    {/* Fake browser dots */}
                    <div className="flex gap-1.5 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    </div>
                    
                    {/* Fake code */}
                    <div className="flex-1 font-mono text-xs leading-loose">
                      <div>
                        <span className="text-primary">const</span>
                        <span className="text-muted-foreground/60"> {project.name.replace(/\s/g, '')} </span>
                        <span className="text-muted-foreground/30">= {'{'}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-muted-foreground/30">status: </span>
                        <span className="text-primary/80">{'"deployed"'}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-muted-foreground/30">uptime: </span>
                        <span className="text-emerald-400/80">{'"99.9%"'}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground/30">{'}'}</span>
                      </div>
                    </div>

                    {/* Large number */}
                    <div className="absolute bottom-4 left-5 font-[family-name:var(--font-space-grotesk)] text-6xl font-bold text-primary/5">
                      0{index + 1}
                    </div>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Projeto
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-primary uppercase tracking-widest">{project.tag}</span>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-primary/70 uppercase tracking-wider px-2 py-1 bg-primary/5 border border-primary/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
