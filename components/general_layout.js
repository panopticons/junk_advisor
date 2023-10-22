import styles from './general_layout.module.css'

export default function General_Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}