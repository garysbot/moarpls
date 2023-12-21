import Image from 'next/image'
import styles from './page.module.css'
import Splash from './splash/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello</h1>
        <Splash/>
      </div>

      <div className={styles.center}>
        <h1>Hello</h1>
      </div>

      <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Step 1 <span>-&gt;</span>
          </h2>
          <p>Models, validations, routes, MongoDB</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Step 2 <span>-&gt;</span>
          </h2>
          <p>User input form</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Step 3 <span>-&gt;</span>
          </h2>
          <p>OpenAI & image logic</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Step 4 <span>-&gt;</span>
          </h2>
          <p>
            Export for user to download
          </p>
        </a>
      </div>
    </main>
  )
}
