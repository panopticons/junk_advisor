import styles from './menu.module.css'

export default function Menu({ children }) {
  return (
    <div className={styles.menu}>
        <a href="/">JunkAdvisor</a>
        <a href="/information">Information</a>
        <a href="/scan">Scan</a>
    {children}
    </div>)
}