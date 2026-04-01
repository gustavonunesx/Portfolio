'use client'

const clients = [
  'NOVOS PROJETOS EM ANDAMENTO...',
  'NOVOS PROJETOS EM ANDAMENTO...',
  'NOVOS PROJETOS EM ANDAMENTO...',
  'NOVOS PROJETOS EM ANDAMENTO...',
  'NOVOS PROJETOS EM ANDAMENTO...',
]

export default function Clients() {
  return (
    <div className="relative py-5 bg-secondary/50 border-y border-primary/10 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />
      
      {/* Marquee track */}
      <div className="flex animate-marquee w-max">
        {[...clients, ...clients].map((client, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-10 font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-muted-foreground/30 uppercase tracking-widest hover:text-primary/60 transition-colors cursor-default whitespace-nowrap"
          >
            <span className="text-primary/30 text-[8px]">◆</span>
            {client}
          </span>
        ))}
      </div>
    </div>
  )
}
