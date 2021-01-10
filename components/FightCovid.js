import styles from '../styles/Fight.module.css'
import { useState } from 'react'

export default function FightCovid() {
  const [active, setActive] = useState(true)
  return (
    <div className={active ? styles.module : `${styles.module} ${styles.inactive}`}>
      <a className={styles.button} href="https://www.canadahelps.org/en/support-covid-19-international-relief-efforts/">Help Fight Covid</a>

      <a onClick={() => { setActive(false) }}>Dismiss</a>
    </div>
  )
}