import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Scan() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
            scan
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Scan &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
