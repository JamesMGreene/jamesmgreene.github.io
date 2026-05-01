import { Link } from "react-router-dom";

export default function Learning() {
  return (
    <>
      <h3>
        <a id="i-heart-learning" href="#i-heart-learning">
          I{" "}
❤️{" "}
          Learning
        </a>
      </h3>
      <ul>
        <li>
          <strong>Husband &amp; Father</strong>{" "}
👪
          <ul>
            <li>
              <em>Oh, so much to learn...!</em>
            </li>
          </ul>
        </li>
        <li>
          <strong>Web Standards Contributor</strong>{" "}
🌐
          <ul>
            <li>
              Proposed a{" "}
              <a href="https://gist.github.com/JamesMGreene/3ded0f6e7f0a658b9394">
                new JavaScript error handling standard for HTML5
              </a>
              , which was ratified into the specification.
            </li>
            <li>
              Worked with the HTML Web Apps Working Group on the Clipboard API
              sub-group to{" "}
              <a href="https://github.com/zeroclipboard/zeroclipboard/issues/171">
                get &quot;click-to-copy&quot; into the DOM APIs
              </a>
              , helping retire Flash-based clipboard workarounds.
            </li>
          </ul>
        </li>
        <li>
          <strong>Open Source Contributor</strong>{" "}
🎁
          <ul>
            <li>
              I always learn <em>a lot</em> while contributing to open source
              software. Check out my growing list of{" "}
              <Link to="/open-source">open source contributions</Link>!
            </li>
          </ul>
        </li>
        <li>
          <strong>Leader &amp; Community Builder</strong>{" "}
✊
          <ul>
            <li>
              Leader of the Parentocats employee resource group at GitHub for 3+ years: co-organizing
              the largest community of belonging at GitHub, supporting all
              parents and caregivers.
            </li>
            <li>
              Internal Mobility advocate at GitHub for 4+ years: built and
              maintained automation to promote internal job opportunities and
              connect employees with relevant hiring managers.
            </li>
            <li>
              Co-founder and co-organizer of the{" "}
              <a href="http://www.meetup.com/JavaScriptMN/">JavaScriptMN</a>{" "}
              user group (~1000 members, average of 75+ attendees).{" "}
              <em>(2011 &ndash; 2015)</em>
            </li>
            <li>
              Proposed{" "}
              <a href="https://github.com/JSFixed/JSFixed/issues/51">several</a>{" "}
              <a href="https://github.com/JSFixed/JSFixed/issues/71#issuecomment-5857559">
                ideas
              </a>{" "}
              for the TC39 committee on ECMAScript 6 via the{" "}
              <a href="https://github.com/JSFixed/JSFixed">JSFixed group</a>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Speaker</strong>{" "}
💬
          <ul>
            <li>
              <a href="http://2012.jsconf.us/#/schedule">JSConf US</a>
            </li>
            <li>
              <a href="http://www.twincitiescodecamp.com/tccc/spring2012/sessions.aspx#s5">
                Twin Cities Code Camp
              </a>
            </li>
            <li>
              <a href="http://www.meetup.com/JavaScriptMN/events/53366672/">
                JavaScriptMN
              </a>
            </li>
            <li>
              Various internal technology presentations on JavaScript, ASP.NET
              MVC, QUnit, and more.
            </li>
          </ul>
        </li>
        <li>
          <strong>Teacher</strong>{" "}
📖
          <ul>
            <li>
              Adjunct Instructor of web development (HTML, CSS, JavaScript) at
              Dunwoody College of Technology. <em>(2015 &ndash; 2018)</em>
            </li>
            <li>
              Adjunct Instructor of programming and operating systems courses at
              Dunwoody College of Technology. <em>(2010 &ndash; 2011)</em>
            </li>
            <li>
              Mentored many coworkers across multiple employers on JavaScript,
              .NET, Node.js, and various libraries and frameworks.{" "}
              <em>(2006 &ndash; present)</em>
            </li>
            <li>
              Undergraduate Teaching Assistant for &quot;Introduction to
              Programming in C++ for Scientists and Engineers&quot; at the
              University of Minnesota. <em>(2005 &ndash; 2006)</em>
            </li>
            <li>
              Volunteer UNIX Teacher for the University of Minnesota&apos;s ACM
              chapter, teaching introductory UNIX classes to the public.{" "}
              <em>(2004 &ndash; 2006)</em>
            </li>
          </ul>
        </li>
        <li>
          <strong>Conference Attendee</strong>{" "}
🎫
          <ul>
            <li>Frontend Masters</li>
            <li>jQCon (jQuery Conference) US</li>
            <li>JSConf US</li>
            <li>JSNation</li>
            <li>LeadDev</li>
            <li>MidwestJS</li>
            <li>Minnebar</li>
            <li>Node Congress</li>
            <li>Node.js Interactive</li>
            <li>React Summit</li>
          </ul>
        </li>
        <li>
          <strong>Student</strong>{" "}
🎓
          <ul>
            <li>M.S. Software Engineering &mdash; University of Minnesota</li>
            <li>
              B.A. Computer Science &mdash; University of Minnesota
              <ul>
                <li>
                  Minor in &quot;Asian Languages &amp; Literature: Japanese&quot;
                </li>
                <li>Minor in &quot;Medieval Studies&quot;</li>
              </ul>
            </li>
            <li>
              OpenJS Foundation Certified
              <ul>
                <li>Node.js Services Developer (JSNSD)</li>
                <li>Node.js Application Developer (JSNAD)</li>
              </ul>
            </li>
            <li>
              Microsoft Certified Technology Specialist (
              <Link to="/mcp-transcript">view transcript</Link>)
              <ul>
                <li>Distributed Application Development (.NET 2.0)</li>
                <li>Web Application Development (.NET 2.0)</li>
                <li>Windows Application Development (.NET 2.0)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
