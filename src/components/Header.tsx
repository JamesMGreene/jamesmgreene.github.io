import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">jamesmgreene <span className={styles.dim}>~</span></Link>
      </h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/open-source">Open Source</Link>
        <Link to="/best-project">Best Project</Link>
        <Link to="/learning">Learning</Link>
      </nav>
      <ul>
        <li>
          <a href="https://github.com/JamesMGreene" title="GitHub">💻</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jamesmgreene/" title="LinkedIn">💼</a>
        </li>
      </ul>
    </header>
  );
}
