'use client'

import { LayoutGrid, Database, ShoppingCart, Wrench } from 'lucide-react'

const services = [
  {
    icon: LayoutGrid,
    name: 'Sites & Landing Pages',
    desc: 'Páginas rápidas, bonitas e que convertem. Perfeitas para apresentar seu negócio e captar clientes com impacto real.',
    features: [
      'Design exclusivo e responsivo',
      'Otimizado para Google (SEO)',
      'Formulários e WhatsApp integrado',
      'Entrega rápida, em poucos dias',
    ],
    tag: 'Web',
  },
  {
    icon: Database,
    name: 'Sistemas Completos',
    desc: 'Aplicações web com painel administrativo, banco de dados e tudo que seu negócio precisa para funcionar de verdade.',
    features: [
      'Painel e área do usuário',
      'Banco de dados e API REST',
      'Pagamentos e integrações',
      'Suporte e manutenção inclusos',
    ],
    tag: 'Full-Stack',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    desc: 'Lojas virtuais completas prontas para vender. Carrinho, checkout, pagamentos e gestão de estoque integrados.',
    features: [
      'Catálogo de produtos completo',
      'Pagamentos via Stripe / Pix',
      'Painel admin de pedidos',
      'Mobile-first e SEO-ready',
    ],
    tag: 'Loja',
  },
  {
    icon: Wrench,
    name: 'Manutenção & Melhorias',
    desc: 'Já tem um site mas precisa de ajustes, melhorias de performance ou novas funcionalidades? Estou aqui.',
    features: [
      'Correção de bugs e erros',
      'Otimização de velocidade',
      'Novas funcionalidades',
      'Migração e atualização',
    ],
    tag: 'Suporte',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs text-primary uppercase tracking-widest mb-4">
            <span className="text-primary/40">//</span> Meus Serviços
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que eu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">faço.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Cada projeto é tratado com cuidado e foco em resultado real.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 rounded-xl overflow-hidden border border-primary/10">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="relative bg-card p-8 group hover:bg-secondary/50 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-muted-foreground tracking-wider">0{index + 1}</span>
                <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider px-2 py-1 border border-primary/10 rounded">
                  {service.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-primary/20 rounded-lg text-primary mb-6 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300">
                <service.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                    <span className="text-primary">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
