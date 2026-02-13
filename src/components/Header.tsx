import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">James M. Greene</Link>
      </h1>
      <p>
        JavaScript engineer/lover. Official{" "}
        <a href="http://jquery.org/team/">jQuery team member</a>.<br />
        Open source collaborator for{" "}
        <a href="https://github.com/ariya/phantomjs">PhantomJS</a>,{" "}
        <a href="https://github.com/jquery/qunit">QUnit</a>,{" "}
        <a href="https://github.com/zeroclipboard/zeroclipboard">ZeroClipboard</a>, and{" "}
        <a href="https://github.com/derek-watson/jsUri">jsUri</a>.
      </p>
      <ul>
        <li>
          <a href="https://github.com/JamesMGreene">
💻
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/jamesmgreene/" title="LinkedIn">
💼
          </a>
        </li>
        <li>
          <Link to="/" title="Website">
🌎
          </Link>
        </li>
      </ul>
    </header>
  );
}
