import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Project maintained by{" "}
        <a href="https://github.com/JamesMGreene">JamesMGreene</a>
      </p>
      <p>
        Hosted on GitHub Pages &mdash; Theme by{" "}
        <a href="https://github.com/orderedlist">orderedlist</a>
      </p>
    </footer>
  );
}
