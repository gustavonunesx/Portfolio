import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    tag: 'SaaS · Sistema',
    name: 'Analytics Dashboard',
    desc: 'Plataforma SaaS completa com dashboards em tempo real, relatórios exportáveis e autenticação multi-tenant. Mais de 500 usuários ativos.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/gustavonunes',
    demo: '#',
    // Substitua por: screenshot: '/projects/analytics.png'
    screenshot: null,
    color: '#4fc3f7',
  },
  {
    num: '02',
    tag: 'E-commerce · Site',
    name: 'Loja Virtual Completa',
    desc: 'E-commerce full-featured com carrinho, pagamentos via Stripe, painel admin e gestão de estoque. Mobile-first e pronto para vender.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    github: 'https://github.com/gustavonunes',
    demo: '#',
    screenshot: null,
    color: '#81d4fa',
  },
  {
    num: '03',
    tag: 'Landing Page · Leads',
    name: 'Landing Page Imobiliária',
    desc: 'Página de captação de leads com formulário inteligente e integração WhatsApp. Alta taxa de conversão e design responsivo.',
    tags: ['React', 'Tailwind', 'WhatsApp API'],
    github: 'https://github.com/gustavonunes',
    demo: '#',
    screenshot: null,
    color: '#4fc3f7',
  },
  {
    num: '04',
    tag: 'Sistema · B2B',
    name: 'Sistema de Gestão',
    desc: 'Sistema interno para controle de clientes, estoque e financeiro. Substituiu planilhas por um painel completo e integrado.',
    tags: ['React', 'Express', 'MySQL'],
    github: 'https://github.com/gustavonunes',
    demo: '#',
    screenshot: null,
    color: '#29b6f6',
  },
]

export default function Projects() {
  useScrollReveal()
  const [hovered, setHovered] = useState(null)

  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <p className={`${styles.eyebrow} reveal`}>
          <span className={styles.eyebrowSlash}>//</span> Meus Projetos
        </p>
        <h2 className={`${styles.title} reveal`}>
          O que eu <span className={styles.accent}>construí.</span>
        </h2>
        <p className={`${styles.sub} reveal`}>
          Uma seleção de trabalhos reais — do simples ao mais complexo.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={p.num}
            className={`${styles.card} reveal`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Screenshot / Preview area */}
            <div className={styles.preview}>
              {p.screenshot ? (
                <img src={p.screenshot} alt={p.name} className={styles.screenshot} />
              ) : (
                <div className={styles.previewPlaceholder}>
                  <div className={styles.previewDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.previewCode}>
                    <div className={styles.codeLine}>
                      <span style={{color:'#4fc3f7'}}>const</span>
                      <span style={{color:'rgba(255,255,255,0.5)'}}> {p.name.replace(/\s/g, '')} </span>
                      <span style={{color:'rgba(255,255,255,0.25)'}}>= {'{'}</span>
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft:'16px'}}>
                      <span style={{color:'rgba(255,255,255,0.25)'}}>status: </span>
                      <span style={{color:'#81d4fa'}}>"deployed"</span>
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft:'16px'}}>
                      <span style={{color:'rgba(255,255,255,0.25)'}}>uptime: </span>
                      <span style={{color:'#4ade80'}}>"99.9%"</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span style={{color:'rgba(255,255,255,0.25)'}}>{'}'}</span>
                    </div>
                  </div>
                  <div className={styles.previewNum}>{p.num}</div>
                  {/*
                    PARA ADICIONAR SCREENSHOT:
                    Adicione a prop screenshot: '/projects/nome.png' no objeto do projeto acima
                  */}
                  <div className={styles.previewHint}>Adicione screenshot →</div>
                </div>
              )}
              <div className={styles.previewOverlay}>
                <a href={p.demo} target="_blank" rel="noreferrer" className={styles.overlayBtn}>
                  <ExternalIcon /> Live Demo
                </a>
              </div>
            </div>

            {/* Info */}
            <div className={styles.info}>
              <div className={styles.infoTop}>
                <span className={styles.cardTag}>{p.tag}</span>
                <div className={styles.cardLinks}>
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.techStack}>
                {p.tags.map(t => (
                  <span key={t} className={styles.techBadge}>{t}</span>
                ))}
              </div>
            </div>

            <div className={styles.cardBorder} style={{ '--card-color': p.color }} />
          </div>
        ))}
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}