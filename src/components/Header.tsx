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
        <a href="http://phantomjs.org/">PhantomJS</a>,{" "}
        <a href="http://qunitjs.com/">QUnit</a>,{" "}
        <a href="http://zeroclipboard.org/">ZeroClipboard</a>, and{" "}
        <a href="https://github.com/derek-watson/jsUri">jsUri</a>.
      </p>
      <ul>
        <li>
          <a href="https://github.com/JamesMGreene">
            <img
              title="GitHub"
              alt=":octocat:"
              src="https://a248.e.akamai.net/assets.github.com/images/icons/emoji/octocat.png"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/_JamesMGreene" title="Twitter">
            <img
              title="Twitter"
              alt=":bird:"
              src="https://a248.e.akamai.net/assets.github.com/images/icons/emoji/bird.png"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li>
          <a href="mailto:james.m.greene@gmail.com" title="Email">
            <img
              title="Email"
              alt=":e-mail:"
              src="https://a248.e.akamai.net/assets.github.com/images/icons/emoji/e-mail.png"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li>
          <Link to="/" title="Website">
            <img
              title="Website"
              alt=":earth_americas:"
              src="https://a248.e.akamai.net/assets.github.com/images/icons/emoji/earth_americas.png"
              height="30"
              width="30"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
