import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>GN<span className={styles.bracket}>/&gt;</span>
        </span>
        <span className={styles.copy}>© {year} Gustavo Nunes — Todos os direitos reservados</span>
      </div>
      <div className={styles.right}>
        <span>Feito com</span>
        <span className={styles.heart}>♥</span>
        <span>e muito café</span>
      </div>
    </footer>
  )
}