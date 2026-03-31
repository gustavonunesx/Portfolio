import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    name: 'Sites & Landing Pages',
    desc: 'Páginas rápidas, bonitas e que convertem. Perfeitas para apresentar seu negócio e captar clientes com impacto real.',
    features: [
      'Design exclusivo e responsivo',
      'Otimizado para Google (SEO)',
      'Formulários e WhatsApp integrado',
      'Entrega rápida, em poucos dias',
    ],
    tag: 'Web · Design',
  },
  {
    num: '02',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    name: 'Sistemas Completos',
    desc: 'Aplicações web com painel administrativo, banco de dados e tudo que seu negócio precisa para funcionar de verdade.',
    features: [
      'Painel e área do usuário',
      'Banco de dados e API REST',
      'Pagamentos e integrações',
      'Suporte e manutenção inclusos',
    ],
    tag: 'Full-Stack · API',
  },
  {
    num: '03',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    name: 'E-commerce',
    desc: 'Lojas virtuais completas prontas para vender. Carrinho, checkout, pagamentos e gestão de estoque integrados.',
    features: [
      'Catálogo de produtos completo',
      'Pagamentos via Stripe / Pix',
      'Painel admin de pedidos',
      'Mobile-first e SEO-ready',
    ],
    tag: 'E-commerce · Loja',
  },
  {
    num: '04',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    name: 'Manutenção & Melhorias',
    desc: 'Já tem um site mas precisa de ajustes, melhorias de performance ou novas funcionalidades? Estou aqui.',
    features: [
      'Correção de bugs e erros',
      'Otimização de velocidade',
      'Novas funcionalidades',
      'Migração e atualização',
    ],
    tag: 'Dev · Suporte',
  },
]

export default function Services() {
  useScrollReveal()

  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <p className={`${styles.eyebrow} reveal`}>
          <span className={styles.eyebrowSlash}>//</span> Nossos Serviços
        </p>
        <h2 className={`${styles.title} reveal`}>
          O que eu <span className={styles.accent}>faço.</span>
        </h2>
        <p className={`${styles.sub} reveal`}>
          Cada projeto é tratado com cuidado e foco em resultado real.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div className={`${styles.card} reveal`} key={s.num} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className={styles.cardTop}>
              <span className={styles.cardNum}>{s.num}</span>
              <span className={styles.cardTag}>{s.tag}</span>
            </div>
            <div className={styles.iconWrap}>{s.icon}</div>
            <h3 className={styles.cardName}>{s.name}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <ul className={styles.featureList}>
              {s.features.map(f => (
                <li key={f}>
                  <span className={styles.featureCheck}>→</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className={styles.cardGlow} />
          </div>
        ))}
      </div>
    </section>
  )
}