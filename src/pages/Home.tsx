import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.greeting}>// Hello, world! 👋</p>
        <h1 className={styles.title}>
          I'm <span className={styles.accent}>James</span>,
          <br />a software engineer.
        </h1>
        <p className={styles.bio}>
          Currently a Senior Software Engineer at GitHub, building developer
          tools and platforms. Contributor to the HTML specification, open source
          enthusiast, and former jQuery team member with deep roots in the
          JavaScript ecosystem.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.number}>20+</div>
            <div className={styles.label}>Years</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>100+</div>
            <div className={styles.label}>Repos</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>∞</div>
            <div className={styles.label}>Curiosity</div>
          </div>
        </div>

        <div className={styles.badges}>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotAi}`}></span> AI
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotGo}`}></span> Go
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotJs}`}></span> JavaScript
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotTs}`}></span> TypeScript
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotReact}`}></span> React
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotNode}`}></span> Node.js
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotNode}`}></span> GitHub Actions
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotPython}`}></span> Python
          </span>
          <span className={styles.badge}>
            <span className={`${styles.dot} ${styles.dotRuby}`}></span> Ruby
          </span>
        </div>
      </section>

      <section className={styles.cards}>
        <Link to="/open-source" className={styles.card}>
          <div className={styles.icon}>🚀</div>
          <h3>Open Source</h3>
          <p>
            From web standards contributions to foundational JavaScript
            libraries — building in the open for over a decade.
          </p>
          <span className={styles.link}>Explore →</span>
        </Link>
        <Link to="/best-project" className={styles.card}>
          <div className={styles.icon}>⭐</div>
          <h3>Best Project</h3>
          <p>
            A deep dive into the project I'm most proud of and the challenges I
            overcame building it.
          </p>
          <span className={styles.link}>Read more →</span>
        </Link>
        <Link to="/learning" className={styles.card}>
          <div className={styles.icon}>📚</div>
          <h3>Always Learning</h3>
          <p>
            Teaching, leading, and growing — from adjunct instructor to ERG
            leader to standards contributor.
          </p>
          <span className={styles.link}>See what's new →</span>
        </Link>
      </section>
    </>
  );
}
