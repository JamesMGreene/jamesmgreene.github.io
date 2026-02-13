import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h3 id="technical-prowess">Technical Prowess</h3>
      <ul>
        <li>
          I am a JavaScript language expert, for both the frontend (browsers)
          and back (Node.js, PhantomJS, etc.). Check out my{" "}
          <Link to="/open-source">open source work</Link> and my{" "}
          <Link to="/best-project">best project narrative</Link> for more
          details.
        </li>
        <li>
          I am extremely proficient at learning new programming languages and
          frameworks.
        </li>
        <li>
          I am a practitioner of unit testing, though I know from experience that
          it doesn&apos;t always pan out as well we hope.
        </li>
        <li>
          I am a regular GitHub.com user but I accomplish most of my Git
          interactions from the terminal.
        </li>
        <li>I am extraordinarily detail-oriented.</li>
      </ul>

      <h3 id="personality">Personality</h3>
      <ul>
        <li>
          I am an easy-going person and enjoy working with others, though I have
          also been an &quot;individual contributor&quot; for much of my
          professional career.
        </li>
        <li>
          I have experience leading small teams (1-10 devs) on focused
          features/refactors/projects.
        </li>
        <li>
          I refuse to stop <Link to="/learning">learning</Link>, and I strive to
          find a healthy balance between the breadth and depth of the knowledge
          that I absorb.
        </li>
        <li>
          I am very passionate about creating <em>and shipping</em> high quality
          software; a desire which is complemented well by my detail-oriented
          nature.
        </li>
        <li>
          I am <em>obsessed</em> with the three Cs of open source:{" "}
          <Link to="/open-source">creating, contributing, and consuming</Link>.
        </li>
        <li>
          I have an unabashed love for JavaScript that most engineers consider
          unhealthy.
        </li>
      </ul>

      <hr />

      <h3 id="more-about-me">
        <em>More about me!</em>
      </h3>
      <ul>
        <li>
          I{" "}
💝{" "}
          Open Sourcing: <Link to="/open-source">open-source</Link>
        </li>
        <li>
          I{" "}
❤️{" "}
          Learning: <Link to="/learning">learning</Link>
        </li>
        <li>
          I am very proud of a particular project:{" "}
          <Link to="/best-project">best-project</Link>
        </li>
        <li>
          I am considered a JavaScript expert by my peers and current employer
        </li>
        <li>
          I may have an emoji addiction{" "}
😊
        </li>
      </ul>
    </>
  );
}
