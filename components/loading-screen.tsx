'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800)
    const hideTimer = setTimeout(() => setVisible(false), 2400)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_65%)]" />

      <div className="relative flex flex-col items-center gap-10">
        {/* Monogram */}
        <div className="relative flex items-end gap-1">
          <span className="font-[family-name:var(--font-space-grotesk)] text-7xl font-bold leading-none text-foreground">
            G
          </span>
          <span className="font-[family-name:var(--font-space-grotesk)] text-7xl font-bold leading-none text-primary">
            N
          </span>
          {/* Dot accent */}
          <span className="absolute -bottom-2 -right-3 w-3 h-3 rounded-full bg-primary" />
          {/* Glow behind monogram */}
          <div className="absolute -inset-6 bg-primary/8 blur-3xl rounded-full -z-10" />
        </div>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-48 h-[2px] bg-primary/15 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full animate-loading-bar" />
          </div>
          <span className="text-[10px] text-muted-foreground tracking-[0.35em] uppercase font-medium">
            Carregando
          </span>
        </div>
      </div>
    </div>
  )
}
