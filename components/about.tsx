'use client'

const stats = [
  { num: '20+', label: 'Projetos entregues' },
  { num: '2+', label: 'Anos de experiência' },
  { num: '100%', label: 'Taxa de entrega' },
  { num: '24h', label: 'Tempo de resposta' },
]

const points = [
  {
    n: '01',
    title: 'Comunicação diária',
    text: 'Você sempre sabe o que está acontecendo. Atualizo o progresso todo dia e respondo rápido.',
  },
  {
    n: '02',
    title: 'Prazo e orçamento respeitados',
    text: 'Defino datas e valores realistas desde o início. O que foi combinado é o que é entregue.',
  },
  {
    n: '03',
    title: 'Entrego, não abandono',
    text: 'Suporte após entrega incluso. Estou aqui para ajustar, corrigir e evoluir o projeto com você.',
  },
  {
    n: '04',
    title: 'Resultado que você tem orgulho',
    text: 'Interfaces bonitas e rápidas que funcionam — algo que você vai querer mostrar para seus clientes.',
  },
]

const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'TailwindCSS', 'Docker']

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs text-primary uppercase tracking-widest mb-4">
            <span className="text-primary/40">//</span> Por que eu
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            O que me <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">diferencia.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <div className="space-y-5 mb-10">
              <p className="text-base text-muted-foreground leading-relaxed">
                Trabalho com foco em <strong className="text-foreground/80 font-medium">resultado real</strong> para o seu negócio.
                Não entrego apenas código — entrego uma solução que funciona, bonita e fácil de usar.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Cada projeto começa com uma <strong className="text-foreground/80 font-medium">conversa honesta</strong> sobre o que você precisa,
                quanto custa e quando fica pronto. Sem surpresas no caminho.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Se você já foi frustrado com dev que sumiu,{' '}
                <strong className="text-foreground/80 font-medium">comunicação clara é minha prioridade número um.</strong>
              </p>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-xs text-primary/60 uppercase tracking-widest mb-4">
                <span className="text-primary/40">//</span> Stack principal
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-primary/80 px-3 py-1.5 bg-primary/5 border border-primary/15 rounded-md hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-primary/10 rounded-lg overflow-hidden border border-primary/10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card p-6 hover:bg-secondary/50 transition-colors">
                  <div className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.num}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Points */}
          <div className="flex flex-col">
            {points.map((point) => (
              <div
                key={point.n}
                className="flex gap-5 py-7 border-b border-primary/10 last:border-b-0 group hover:pl-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-xs text-primary tracking-wider">{point.n}</span>
                  <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent min-h-[20px]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
