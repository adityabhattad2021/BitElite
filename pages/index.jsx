import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BitElite</title>
        <meta name="BitElite" content="We love to BUIDL!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={{
        background: 'url(/1.png) no-repeat center center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }} className="landing flex-col align-middle justify-center items-center font-sans content-center p-20 pt-36">
        <div>
          <h2 className="leading-9">Team</h2>
          <h1 className="leading-2">BitElite</h1>
          <p className="leading-2 ml-2">Presents</p>
        </div>
        
      </section>

      <section className="flex-col align-middle justify-center items-center font-sans content-center p-20 pt-36" style={{
        background: 'url(/2.png) no-repeat center center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}>

      </section>

      <section className="flex-col align-middle justify-center items-center font-sans content-center p-20 pt-36" style={{
        background: 'url(/3.png) no-repeat center center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}>

      </section>

      <section style={{
        background: 'url(/4.png) no-repeat center center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <h1>Who's building it?</h1>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          <div className="user">
            <img src="/favicon.ico" alt="user" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="user">
            <img src="/favicon.ico" alt="user" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="user">
            <img src="/favicon.ico" alt="user" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="user">
            <img src="/favicon.ico" alt="user" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="user">
            <img src="/favicon.ico" alt="user" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
        </div>
      </section>
    </div>
  )
}
