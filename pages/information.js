import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Menu from '../components/menu'


export default function Information() {
  return (
    <div className={styles.parent}>
      <Head>
        <title>JunkAdvisor Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>

      <main>
        <h1 className={styles.title}>
          Information TBD
        </h1>
      </main>
    </div>
  );
}
