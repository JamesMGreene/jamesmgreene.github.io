import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026{" "}
        <a href="https://github.com/JamesMGreene">jamesmgreene</a>
        {" "}// built with react + typescript + vite
      </p>
    </footer>
  );
}
