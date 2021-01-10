import Head from 'next/head'
import twemoji from 'twemoji'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Macaron Home</title>
      </Head>

      <header className={styles.header}>
        <div>
          <img src="/macaron.webp" alt="Macaron Logo" width="52" height="52" />
          <h1>Macaron</h1>
        </div>
        <p style={{textAlign: 'center'}}>
          Bite-sized news at your fingertips. <br />
          Catch the latest news and see how you can help! <br /><br />
          Click or tap a news card to get started.
        </p>
      </header>

      <main className={styles.main}>
        <h2>News</h2>
        <Link href="/01-Capitol-Hill-Storming">
          <a className={styles.card}>
            <div className={styles.content}>
              <h3 className={styles.title}>Capitol Hill Storming</h3>
              <p className={styles.timestamp}>2021-01-06</p>
              <span className={styles.description}>
                Congress confirmed Democrat Joe Biden as the presidential election winner early Thursday after a violent mob loyal to President Donald Trump stormed the U.S. Capitol in a stunning attempt to overturn America's presidential election, undercut the nation's democracy and keep Trump in the White House.
              </span>
            </div>
            <div className={styles.image}>
              <img src="/gettyimages-1230465281.webp" alt="Story Image" width="40" height="40" />
            </div>
            <div className={styles.sentiment}>
              <span dangerouslySetInnerHTML={{__html: twemoji.parse('🙂') }} />
              <div className={styles.bar}>
                <div className={styles.filled} style={{width: '21.7%'}} />
              </div>
              <span dangerouslySetInnerHTML={{__html: twemoji.parse('😟') }} />
            </div>
            <div className={styles.keywords}>
              <span>society</span>
              <span>lawmakers</span>
            </div>
          </a>
        </Link>
        <Link href="/02-New-Coronavirus-Strain">
          <a className={styles.card}>
            <div className={styles.content}>
              <h3 className={styles.title}>New Coronavirus Strain</h3>
              <p className={styles.timestamp}>2020-01-05</p>
              <span className={styles.description}>
              New modelling suggests a highly-transmissible new variant of the coronavirus first reported in the United Kingdom could — in the worst-case scenario — become the dominant strain in Ontario as soon as late February, well before mass vaccinations are set to begin in April.
              </span>
            </div>
            <div className={styles.image}>
              <img src="/coronavirus.webp" alt="Story Image" width="40" height="40" />
            </div>
            <div className={styles.sentiment}>
              <span dangerouslySetInnerHTML={{__html: twemoji.parse('🙂') }} />
              <div className={styles.bar}>
                <div className={styles.filled} style={{width: '34.5%'}} />
              </div>
              <span dangerouslySetInnerHTML={{__html: twemoji.parse('😟') }} />
            </div>
            <div className={styles.keywords}>
              <span>health &amp; medicine</span>
              <span>new variant</span>
            </div>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        The Macaron team &copy; 2021
      </footer>
    </div>
  )
}
