import Head from 'next/head'
import Link from 'next/link'
import twemoji from 'twemoji'
import styles from '../styles/Home.module.css'
import Share from '../components/ShareButton'

export default function Article() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Capitol Hill Storming</title>
      </Head>

      <nav className={styles.navigation}>
        <Link href="/">
          <a>
            <span dangerouslySetInnerHTML={{ __html: twemoji.parse('⬅') }} /> <span>Back</span>
          </a>
        </Link>
      </nav>

      <header className={styles.header}>
        <div className={styles.articleImage}>
          <img src="/gettyimages-1230465281.webp" alt="Capitol Hill Storming Image" width="200" height="160" />
        </div>
        <h1 className={styles.underline}>Capitol Hill Storming</h1>
        <p>2021-01-06</p>
      </header>

      <main className={`${styles.main} ${styles.article}`}>
        <div className={styles.whatDo}>
          <h2>
            What YOU can do
          </h2>
          <ul className={styles.checkList}>
            <li><b>DO</b> stay home</li>
          </ul>
          <ul className={styles.crossList}>
            <li><b>DON'T</b> go to Capitol Hill</li>
          </ul>
        </div>
        <article>
          <h2>Summary</h2>
          <p>
          Congress confirmed Democrat Joe Biden as the presidential election winner early Thursday after a violent mob loyal to President Donald Trump stormed the U.S. Capitol in a stunning attempt to overturn America's presidential election, undercut the nation's democracy and keep Trump in the White House.
<br />
Lawmakers were resolved to complete the Electoral College tally in a display to the country, and the world, of the nation's enduring commitment to uphold the will of the voters and the peaceful transfer of power.
<br />
Biden win confirmed after pro-Trump mob storms U.S. Capitol.
          </p>
          <h3>Sources</h3>
          <ul className={styles.sources}>
            <li><a href="https://www.cbc.ca/news/opinion/opinion-police-response-us-capitol-building-racism-1.5864611">https://www.cbc.ca/news/opinion/opinion-police-response-us-capitol-building-racism-1.5864611</a></li>
            <li><a href="https://www.ctvnews.ca/world/these-are-some-of-the-extremist-groups-responsible-for-the-violence-on-capitol-hill-1.5259142">https://www.ctvnews.ca/world/these-are-some-of-the-extremist-groups-responsible-for-the-violence-on-capitol-hill-1.5259142</a></li>
            <li><a href="https://www.huffingtonpost.ca/entry/biden-trump-should-call-for-end-to-insurrection_n_5ff62701c5b64e568bf3a410?ri18n=true">https://www.huffingtonpost.ca/entry/biden-trump-should-call-for-end-to-insurrection_n_5ff62701c5b64e568bf3a410?ri18n=true</a></li>
          </ul>
        </article>
        <h2>Inconsistencies</h2>
        <p>None found.</p>
        
      </main>

      <Share />

      <footer className={styles.footer}>
        The Macaron team &copy; 2021
      </footer>
    </div>
  )
}