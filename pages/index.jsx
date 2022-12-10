import Head from 'next/head'
import About from '../components/About'
import Intro from '../components/Intro'
import People from '../components/People'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BitElite</title>
        <meta name="BitElite" content="We love to BUIDL!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro/>
      <About/>
      <People/>
      
    </div>
  )
}
