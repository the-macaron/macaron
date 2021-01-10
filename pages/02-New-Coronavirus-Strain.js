import Head from 'next/head'
import Link from 'next/link'
import twemoji from 'twemoji'
import styles from '../styles/Home.module.css'
import Share from '../components/ShareButton'
import Fight from '../components/FightCovid'

export default function Article() {
  return (
    <div className={styles.container}>
      <Head>
        <title>New Coronavirus Strain</title>
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
          <img className={styles.articleImage} src="/coronavirus.webp" alt="New Coronavirus Strain Image" width="200" height="200" />
        </div>
        <h1 className={styles.underline}>New Coronavirus Strain</h1>
        <p>2021-01-05</p>
      </header>

      <main className={`${styles.main} ${styles.article}`}>
        <div className={styles.whatDo}>
          <h2>
            What YOU can do
          </h2>
          <ul className={styles.checkList}>
            <li><b>DO</b> stay home</li>
            <li><b>DO</b> socially distance</li>
            <li><b>DO</b> wear masks</li>
          </ul>
          <ul className={styles.crossList}>
            <li><b>DON'T</b> go out for non-essential services</li>
          </ul>
        </div>
        <article>
          <h2>Summary</h2>
          <p>
          New modelling suggests a highly-transmissible new variant of the coronavirus first reported in the United Kingdom could — in the worst-case scenario — become the dominant strain in Ontario as soon as late February, well before mass vaccinations are set to begin in April.
<br />
"I didn't believe it, actually," said Day, who passed his model around to his colleagues to make sure the rate of acceleration of the new variant's spread wasn't a mistake.
<br />
The threat posed by the more contagious variant partly lies in the time it takes for the number of COVID-19 cases to double, between 10 and 15 days, far fewer than the estimated 40 days of the current coronavirus strain.
          </p>
          <h3>Sources</h3>
          <ul className={styles.sources}>
            <li><a href="https://www.cbc.ca/news/canada/coronavirus-covid19-canada-world-january-9-2021-1.5867359">https://www.cbc.ca/news/canada/coronavirus-covid19-canada-world-january-9-2021-1.5867359</a></li>
            <li><a href="https://toronto.ctvnews.ca/ontario-shatters-covid-19-record-with-more-than-4-200-new-cases-cites-data-backlog-1.5258807">https://toronto.ctvnews.ca/ontario-shatters-covid-19-record-with-more-than-4-200-new-cases-cites-data-backlog-1.5258807</a></li>
            <li><a href="https://www.huffingtonpost.ca/entry/covid-south-african-variant-alberta-canada_ca_5ff90000c5b6c77d85e6c7cf?utm_hp_ref=ca-coronavirus">https://www.huffingtonpost.ca/entry/covid-south-african-variant-alberta-canada_ca_5ff90000c5b6c77d85e6c7cf?utm_hp_ref=ca-coronavirus</a></li>
          </ul>
        </article>
        <h2>Inconsistencies</h2>
        <p>None found.</p>
      </main>

      <Fight />
      <Share />

      <footer className={styles.footer}>
        The Macaron team &copy; 2021
      </footer>
    </div>
  )
}