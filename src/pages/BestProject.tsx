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
        <a
          id="new-feature-user-annotations"
          href="#new-feature-user-annotations"
        >
          New Feature: User Annotations
        </a>
      </h3>

      <p>
        The best project that I have had the honor of spearheading was the
        prototyping, refining, and implementing of the &quot;User
        Annotations&quot; feature for my employer&apos;s latest flagship product
        for legal research,{" "}
        <a href="http://next.westlaw.com">WestlawNext</a> (also,{" "}
        <a href="http://westlawnext.com">its marketing site</a>). This feature
        enabled users to:
      </p>

      <ol>
        <li>Highlight text within our legal documents.</li>
        <li>
          Highlight text within our legal documents and attach a inline note to
          it.
        </li>
        <li>
          Attach document-level notes when no associated text needs to be
          highlighted.
        </li>
      </ol>

      <h3>
        <a id="why" href="#why">
          Why?
        </a>
      </h3>

      <p>
        So why was this feature the best project I&apos;ve worked on to date? It
        was:
      </p>

      <ul>
        <li>
          <strong>&quot;Impossible&quot;:</strong> When our Information Architect
          originally brought the idea to me and my team on a Friday afternoon, we
          all thought it was impossible to achieve, especially cross-browser (IE
          &gt;= 7, and friends). None of us had ever seen such functionality on
          the web at that point, only in desktop applications like Adobe
          Reader/Acrobat—and it is still quite rare even today. However, all of
          our biggest competitors have added since attempted to copy our
          functionality... some mostly successfully, some not.
        </li>
        <li>
          <strong>Agile:</strong> As it happened, I was leaving on a family road
          trip the next day. Inspired by the challenge, I brought my personal
          laptop along and was able to hammer out a basic but working prototype
          for IE and an especially buggy prototype for the other browsers.
          Additionally, although we were already practicing agile development as
          our SDLC, this particular project had an exceptionally tight feedback
          loop between the IA and myself, which made it simple to mold the
          functionality to be the exact implementation to match his idea.
        </li>
        <li>
          <strong>Unique Knowledge:</strong> Even as seasoned web developers,
          what we didn&apos;t know during our IA&apos;s initial pitch was that
          the browsers did each offer <em>one of two</em> Selection &amp; Range
          DOM APIs: IE&apos;s proprietary model or the W3C standardized model.
          Both models have their pros and cons but were certainly not equivalent.
          As it turned out, a working prototype was much easier to achieve with
          IE&apos;s model but I was eventually able to achieve consistent
          cross-browser functionality over the next few weeks. The work I had to
          do to bridge the gaps was effectively a proprietary precursor to the{" "}
          <a href="http://code.google.com/p/rangy">Rangy</a> JavaScript library.
        </li>
        <li>
          <strong>Challenging:</strong> Even after working around the
          cross-browser compatibility issues, our product&apos;s content posed
          its own challenges:
          <ol>
            <li>
              Our users&apos; annotations are private data, so they couldn&apos;t
              be associated directly with a document.
            </li>
            <li>
              We have pedabytes of document content, so giving each user their
              own copy of the document wasn&apos;t a cost effective option.
            </li>
            <li>
              Our document content also gets updated occasionally, so our
              algorithm for placing the inline user annotations had to be very
              forgiving.
            </li>
          </ol>
        </li>
        <li>
          <strong>Little Management Overhead:</strong> For this project, I worked
          mostly independently with minor collaboration points when I wanted some
          unbiased design validation from my peers. Moreover, to my
          management&apos;s credit, they were primarily just &quot;along for the
          ride&quot; on this effort and the lack of micromanagement (
          <em>not</em> the norm at the company) made it <em>so</em> much easier
          to get some intense work done without any roadblocks.
        </li>
        <li>
          <strong>Successful:</strong> Last but certainly not leas, the project
          originally thought impossible ended in a complete success. Not only did
          it go out with the initial release of our new product but it was also
          wildly popular with our customers: on an average day, more than 30000
          new highlights and notes are added.
        </li>
      </ul>

      <h3>
        <a id="sharing" href="#sharing">
          Sharing
        </a>
      </h3>

      <p>
        Unfortunately, I have never been able to acquire permission from my
        employer to open source the overall annotations workflow. However, I have
        been &quot;allowed&quot; to open source several smaller pieces of it by
        deciding that sharing them with the world was important enough to me to
        warrant the extra effort required to rewrite them from scratch. Thus, I
        have since released initial versions of the &quot;jquery.textSelect&quot;
        and &quot;jWalker&quot; JavaScript libraries (see my{" "}
        <Link to="/open-source">&quot;Open Source&quot; page</Link> for more
        details), though more work remains to get them up to par with the
        robustness and completeness of their proprietary counterparts.
      </p>
    </>
  );
}
