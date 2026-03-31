'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-background py-7 px-6 md:px-16 border-t border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-[family-name:var(--font-space-grotesk)] text-base font-bold tracking-tight text-foreground">
            <span className="text-primary">G</span>
            <span>Nunes</span>
          </a>
          
          <span className="text-xs text-muted-foreground">
            © {year} Gustavo Nunes — Todos os direitos reservados
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>Feito com</span>
          <span className="text-primary animate-pulse">♥</span>
          <span>e muito café</span>
        </div>
      </div>
    </footer>
  )
}
