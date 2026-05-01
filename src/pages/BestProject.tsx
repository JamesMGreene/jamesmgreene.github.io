import { Link } from "react-router-dom";

export default function BestProject() {
  return (
    <>
      <h2>
        <a id="best-project" href="#best-project">
          Best Project
        </a>
      </h2>

      <h3>
        <a id="github-learning-lab" href="#github-learning-lab">
          GitHub Learning Lab
        </a>
      </h3>

      <p>
        The project I&apos;m most proud of is{" "}
        <a href="https://github.com/apps/github-learning-lab">
          GitHub Learning Lab
        </a>
        : an interactive e-learning platform that I planned, designed, and built
        at GitHub. Learning Lab taught people how to use GitHub (and many other
        technologies) by guiding them through real-world tasks in actual
        repositories — not simulations or sandboxes, but the real thing.
      </p>

      <h3>
        <a id="why" href="#why">
          Why?
        </a>
      </h3>

      <p>
        So why is Learning Lab the project I&apos;m most proud of? It was:
      </p>

      <ul>
        <li>
          <strong>Full Ownership:</strong> I was involved from the very beginning
          — from concept and architecture through implementation, launch, and
          iteration. This wasn&apos;t a feature on someone else&apos;s product; it
          was a standalone platform that I helped bring to life from zero.
        </li>
        <li>
          <strong>Innovative:</strong> At the time, most developer education was
          passive — watch a video, read docs, follow a tutorial in a sandbox.
          Learning Lab flipped this by using GitHub&apos;s own platform as the
          classroom: bots would open issues, review pull requests, and provide
          contextual feedback as learners progressed through courses. The
          experience felt like pair programming with a patient mentor.
        </li>
        <li>
          <strong>Impactful:</strong> Learning Lab helped millions of developers
          learn Git, GitHub, GitHub Actions, and more. It lowered the barrier to
          entry for new developers and gave organizations a way to onboard teams
          with hands-on training.
        </li>
        <li>
          <strong>Technically Interesting:</strong> Under the hood, Learning Lab
          was an event-driven system that listened to GitHub webhooks, evaluated
          learner progress against course-defined criteria, and responded with
          the appropriate next steps. Building a reliable, responsive educational
          experience on top of an eventually-consistent event stream was a
          fascinating challenge.
        </li>
        <li>
          <strong>Community-Driven:</strong> Course authors from across the
          community could create their own Learning Lab courses, making it a true
          platform rather than just a product. Watching the community build
          courses for topics we never anticipated was incredibly rewarding.
        </li>
      </ul>

      <hr />

      <h3>
        <a id="honorable-mention" href="#honorable-mention">
          Honorable Mention: User Annotations for WestlawNext
        </a>
      </h3>

      <p>
        Earlier in my career at Thomson Reuters, I spearheaded the prototyping
        and implementation of the &quot;User Annotations&quot; feature for{" "}
        <a href="http://next.westlaw.com">WestlawNext</a>, a flagship legal
        research product. This feature enabled users to highlight text and attach
        notes within legal documents — functionality that, at the time, had never
        been achieved on the web.
      </p>

      <ul>
        <li>
          <strong>&quot;Impossible&quot;:</strong> When the idea was first pitched
          on a Friday afternoon, we all thought it was impossible to achieve
          cross-browser (IE &gt;= 7 and friends). None of us had ever seen such
          functionality on the web — only in desktop apps like Adobe Reader.
          Inspired by the challenge, I prototyped a working solution over a
          weekend road trip.
        </li>
        <li>
          <strong>Pioneering:</strong> The browsers each offered one of two
          incompatible Selection &amp; Range DOM APIs. The cross-browser
          bridging work I did was effectively a proprietary precursor to the{" "}
          <a href="https://github.com/timdown/rangy">Rangy</a> JavaScript library.
        </li>
        <li>
          <strong>Successful:</strong> The project originally thought impossible
          launched with the product&apos;s initial release and became wildly
          popular — on an average day, more than 30,000 new highlights and notes
          were added. Competitors later attempted to replicate the functionality.
        </li>
      </ul>

      <p>
        I later open sourced several pieces of that work as the{" "}
        <code>jquery.textSelect</code> and <code>jWalker</code> libraries (see
        my <Link to="/open-source">Open Source page</Link> for more details).
      </p>
    </>
  );
}
