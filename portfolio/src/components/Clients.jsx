import styles from './Clients.module.css'

const clients = [
  'Imobiliária SP',
  'ClinicaMed',
  'LojaModa',
  'SkyTech',
  'DeliveryApp',
  'Construtech',
  'AgênciaX',
]

export default function Clients() {
  return (
    <div className={styles.strip} id="clients">
      <div className={styles.track}>
        {[...clients, ...clients].map((c, i) => (
          <span className={styles.item} key={i}>
            <span className={styles.dot}>◆</span>
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}