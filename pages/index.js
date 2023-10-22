import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Menu from '../components/menu'


export default function Home() {
  return (
    <div className={styles.parent}>
      <Head>
        <title>JunkAdvisor Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>

      <main>
        <h1 className={styles.title}>
          JunkAdvisor
        </h1>
      </main>

    </div>
  );
}
