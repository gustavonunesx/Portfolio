import useScrollReveal from '../hooks/useScrollReveal'
import styles from './About.module.css'

const stats = [
  { num: '20+', label: 'Projetos entregues' },
  { num: '3+',  label: 'Anos de experiência' },
  { num: '100%', label: 'Taxa de entrega' },
  { num: '24h', label: 'Tempo de resposta' },
]

const points = [
  {
    n: '01',
    icon: '◈',
    title: 'Comunicação diária',
    text: 'Você sempre sabe o que está acontecendo. Atualizo o progresso todo dia e respondo rápido.',
  },
  {
    n: '02',
    icon: '◈',
    title: 'Prazo e orçamento respeitados',
    text: 'Defino datas e valores realistas desde o início. O que foi combinado é o que é entregue.',
  },
  {
    n: '03',
    icon: '◈',
    title: 'Entrego, não abandono',
    text: 'Suporte após entrega incluso. Estou aqui para ajustar, corrigir e evoluir o projeto com você.',
  },
  {
    n: '04',
    icon: '◈',
    title: 'Resultado que você tem orgulho',
    text: 'Interfaces bonitas e rápidas que funcionam — algo que você vai querer mostrar para seus clientes.',
  },
]

const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'TailwindCSS', 'Docker']

export default function About() {
  useScrollReveal()

  return (
    <section className={styles.section} id="about">
      <div className={styles.header}>
        <p className={`${styles.eyebrow} reveal`}>
          <span className={styles.eyebrowSlash}>//</span> Por que eu
        </p>
        <h2 className={`${styles.title} reveal`}>
          O que me <span className={styles.accent}>diferencia.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {/* Left column */}
        <div className={`${styles.left} reveal-left`}>
          <p className={styles.p}>
            Trabalho com foco em <strong>resultado real</strong> para o seu negócio.
            Não entrego apenas código — entrego uma solução que funciona, bonita e fácil de usar.
          </p>
          <p className={styles.p}>
            Cada projeto começa com uma <strong>conversa honesta</strong> sobre o que você precisa,
            quanto custa e quando fica pronto. Sem surpresas no caminho.
          </p>
          <p className={styles.p}>
            Se você já foi frustrado com dev que sumiu,{' '}
            <strong>comunicação clara é minha prioridade número um.</strong>
          </p>

          <div className={styles.skillsWrap}>
            <p className={styles.skillsLabel}>
              <span className={styles.eyebrowSlash}>//</span> Stack principal
            </p>
            <div className={styles.skillsGrid}>
              {skills.map(s => (
                <span key={s} className={styles.skillBadge}>{s}</span>
              ))}
            </div>
          </div>

          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div className={styles.statBox} key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className={`${styles.right} reveal-right`}>
          <div className={styles.points}>
            {points.map(pt => (
              <div className={styles.point} key={pt.n}>
                <div className={styles.pointLeft}>
                  <span className={styles.pointN}>{pt.n}</span>
                  <div className={styles.pointLine} />
                </div>
                <div className={styles.pointContent}>
                  <div className={styles.pointTitle}>{pt.title}</div>
                  <p className={styles.pointText}>{pt.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}