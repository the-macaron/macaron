import twemoji from 'twemoji'
import styles from '../styles/Share.module.css'

export default function ShareButton() {
  return (
    <div className={styles.button}>
      <span dangerouslySetInnerHTML={{__html: twemoji.parse('🔗')}} />
    </div>
  )
}