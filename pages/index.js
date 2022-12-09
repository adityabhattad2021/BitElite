import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BitElite</title>
        <meta name="BitElite" content="We love to BUIDL!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className='mx-auto text-5xl'>
          BitElite
        </h1>
      </main>
    </div>
  )
}
