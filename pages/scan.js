import Head from 'next/head';
import General_Layout from '../components/general_layout'
import Menu from '../components/menu'
import styles from '../styles/Home.module.css';


export default function Scan() {
    return (
      <General_Layout>
        <div className={styles.parent}>
      <Head>
        <title>Scan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>

      <main>
        <h1 className={styles.title}>
          Scan
        </h1>
      </main>

    </div>
      </General_Layout>
    )
  }