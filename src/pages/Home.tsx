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
          JavaScript expert, open source enthusiast, and builder of developer
          tools. jQuery team member and contributor to PhantomJS, QUnit, and
          ZeroClipboard.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.number}>500+</div>
            <div className={styles.label}>Repos</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>15+</div>
            <div className={styles.label}>Years</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>∞</div>
            <div className={styles.label}>Curiosity</div>
          </div>
        </div>

        <div className={styles.badges}>
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
        </div>
      </section>

      <section className={styles.cards}>
        <Link to="/open-source" className={styles.card}>
          <div className={styles.icon}>🚀</div>
          <h3>Open Source</h3>
          <p>
            Creating, contributing, and consuming open source projects across the
            JavaScript ecosystem.
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
            Finding the balance between breadth and depth of knowledge across
            languages and frameworks.
          </p>
          <span className={styles.link}>See what's new →</span>
        </Link>
      </section>
    </>
  );
}
