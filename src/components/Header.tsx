import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <NavLink to="/">JamesMGreene <span className={styles.dim}>~</span></NavLink>
      </h1>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink>
        <NavLink to="/open-source" className={({ isActive }) => isActive ? styles.active : undefined}>Open Source</NavLink>
        <NavLink to="/best-project" className={({ isActive }) => isActive ? styles.active : undefined}>Best Project</NavLink>
        <NavLink to="/learning" className={({ isActive }) => isActive ? styles.active : undefined}>Learning</NavLink>
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
