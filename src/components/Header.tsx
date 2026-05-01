import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <NavLink to="/">JamesMGreene <span className={styles.dim}>~</span></NavLink>
      </h1>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>Home</NavLink>
        <NavLink to="/open-source" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>Open Source</NavLink>
        <NavLink to="/best-project" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>Best Project</NavLink>
        <NavLink to="/learning" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>Learning</NavLink>
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
