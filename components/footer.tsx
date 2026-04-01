'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-background py-7 px-6 md:px-16 border-t border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Logo */}
        <a href="#" className="group flex items-center font-[family-name:var(--font-space-grotesk)] text-base font-bold tracking-tight">
          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">&lt;</span>
          <span className="text-primary mx-0.5 group-hover:scale-110 transition-transform duration-300 inline-block">G</span>
          <span className="text-foreground group-hover:text-primary transition-colors duration-300">Nunes</span>
          <span className="text-primary group-hover:text-foreground transition-colors duration-300">/</span>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">&gt;</span>
        </a>

        <span className="text-xs text-muted-foreground">
          © {year} Gustavo Nunes — Todos os direitos reservados
        </span>

        
      </div>
    </footer>
  )
}
