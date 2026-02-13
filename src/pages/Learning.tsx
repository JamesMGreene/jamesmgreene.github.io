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
          <strong>Speaker</strong>{" "}
💬
          <ul>
            <li>
              <a href="http://www.twincitiescodecamp.com/tccc/spring2012/sessions.aspx#s5">
                Twin Cities Code Camp
              </a>
            </li>
            <li>
              <a href="http://2012.jsconf.us/#/schedule">JSConf US</a>
            </li>
            <li>
              <a href="http://www.meetup.com/JavaScriptMN/events/53366672/">
                JavaScriptMN
              </a>
            </li>
            <li>
              Various technology presentations at work: ASP.NET MVC, the
              JavaScript language, QUnit, etc.
            </li>
          </ul>
        </li>
        <li>
          <strong>Conference Attendee</strong>{" "}
🎫
          <ul>
            <li>
              <a href="http://lanyrd.com/2012/frontendmasters/">
                Frontend Masters 2
              </a>
            </li>
            <li>
              <a href="http://2012.jsconf.us/">JSConf US</a>
            </li>
            <li>
              <a href="http://events.jquery.org/2013/portland/">
                jQCon (jQuery Conference) US
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong>Web Community Activist</strong>{" "}
✊
          <ul>
            <li>
              Co-organizer of the{" "}
              <a href="http://www.meetup.com/JavaScriptMN/members/?op=leaders">
                JavaScriptMN
              </a>{" "}
              user group (~1000 members, average of 75+ attendees)
            </li>
            <li>
              Actively try to drink from the firehose that is JavaScript news
            </li>
            <li>
              Proposed a{" "}
              <a href="https://gist.github.com/JamesMGreene/3ded0f6e7f0a658b9394">
                new JavaScript error handling standard for HTML5
              </a>
              , which was ratified.
            </li>
            <li>
              Proposed{" "}
              <a href="https://github.com/JSFixed/JSFixed/issues/51">several</a>{" "}
              <a href="https://github.com/JSFixed/JSFixed/issues/71#issuecomment-5857559">
                ideas
              </a>{" "}
              for the TC39 committee on ECMAScript 6 via the{" "}
              <a href="https://github.com/JSFixed/JSFixed">JSFixed group</a>
            </li>
            <li>
              Working with the HTML Web Apps Working Group on the Clipboard
              sub-group to{" "}
              <a href="https://github.com/zeroclipboard/zeroclipboard/issues/171">
                get &quot;click-to-copy&quot; into the DOM APIs
              </a>{" "}
              so that we can put Flash Player to rest sooner than later.
            </li>
          </ul>
        </li>
        <li>
          <strong>Teacher</strong>{" "}
📖
          <ul>
            <li>
              Mentored many coworkers on the .NET Framework, ASP.NET MVC, the
              JavaScript language, and various JavaScript libraries like jQuery,
              QUnit, RequireJS, etc. <em>(2006 - present)</em>
            </li>
            <li>
              Adjunct Instructor of programming and operating systems courses at
              Dunwoody College of Technology. <em>(2010 - present)</em>
            </li>
            <li>
              Undergraduate Teaching Assistant (a rare position) for
              &quot;Introduction to Programming in C++ for Scientists and
              Engineers&quot; at the University of Minnesota.{" "}
              <em>(2005 - 2006)</em>
            </li>
            <li>
              Volunteer UNIX Teacher for the University of Minnesota&apos;s
              chapter of the Association for Computing Machinery (ACM), teaching
              a series of introductory classes to the public on using UNIX at the
              beginning of each semester. <em>(2004 - 2006)</em>
            </li>
          </ul>
        </li>
        <li>
          <strong>Student</strong>{" "}
🎓
          <ul>
            <li>M.S. Software Engineering</li>
            <li>
              B.A. Computer Science
              <ul>
                <li>
                  Minored in &quot;Asian Languages &amp; Literature:
                  Japanese&quot;
                </li>
                <li>Minored in &quot;Medieval Studies&quot;</li>
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
        <li>
          <strong>Husband &amp; Father</strong>{" "}
👪
          <ul>
            <li>
              <em>Oh, so much to learn...!</em>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
