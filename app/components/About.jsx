const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <div class="textAlign">
        <p>
          <b>
            <span className="readable big quote inlineBlock">
              "Interested in all aspects of Software Development, seeking employment where I can
              write clean code and help build our team and products stronger."
            </span>
          </b>
        </p>
        <br />
        <br />
        <br />
        <span className="title readable inlineBlock"></span>
        <br />
        <br />
        <span className="readEasy big inlineBlock">
          <u>FULLSTACK MERN CERTIFICATION:</u>
          <br />
          The MERN Stack is: MongoDB, Express(server) React, Node.js <br />
          1800 Hours Certification awarded after completion of 6 Certifications:
          <br />
          <code>
            Quality Assurance and Information Security Certification <br />
            Data Visualization with D3 Certification <br />
            APIs and MicroServices Certification <br />
            JavaScript Algorithms and Data Structures Certification <br />
            Front End Development Libraries Certification <br />
            Responsive Web Design Certification
          </code>
          <br />
        </span>
        <br /> <br />
        <br />
        <br />
        <span className="center">
          <ol className="readEasy inlineBlock">
            <br />
            <li>
              <span className="readable">
                <span className="big">Responsive Web Design Certification</span>
                <br />
                <code>
                  HTML5, CSS, Applied Visual Design, Applied Accessibility,
                  Responsive Web Design Principles, CSS FlexBox, CSS Grid, and
                  e-forms
                </code>
                <hr></hr>
              </span>
            </li>

            <li>
              <span className="readable">
                <span className="big">
                  JavaScript Algorithms and Data Structures Certification
                </span>
                <br />
                <code>
                  JavaScript data structures are explored. Then creating
                  algorithms to manipulate strings, factorialize numbers, and
                  solve problems. Also touches on OOP and FP(functional
                  programming).
                </code>
                <hr></hr>
              </span>
            </li>
            <li>
              <span className="readable">
                <span className="big">
                  Front End Development Libraries Certification
                </span>
                <br />
                <code>
                  Bootstrap, jQuery Sass, React and Redux. Building modern
                  responsive component based web applications capable of scaling
                  up.
                </code>
                <hr></hr>
              </span>
            </li>
            <li>
              <span className="readable">
                <span className="big">Data Visualization Certification</span>
                <br />
                <code>
                  Using data to create different charts, graphs, hover elements,
                  and other ingredients to create dynamic and attractive data
                  visualizations.
                </code>
                <hr></hr>
              </span>
            </li>

            <li>
              <span className="readable">
                <span className="big">
                  APIs and MicroServices Certification
                </span>
                <br />
                <code>
                  Back end with Node.js and npm (Node Package Manager). Also
                  building web applications with the Express framework, build
                  APIs and microservices with MongoDB and the Mongoose library.
                </code>
                <hr></hr>
              </span>
            </li>

            <li>
              <span className="readable">
                <span className="big">Quality Assurance Certification</span>
                <br />
                <code>
                  Advanced Node.js, Authentication with Passport, Social
                  Authentication, Template Engine allows server-side variable
                  rendering with Pug, and T Testing with Chai.
                </code>
              </span>
              <hr></hr>
            </li>
          </ol>
          <br />
          <span className="readable title">
            Full Stack Certification: 1800 hours
          </span>
          <br />
        </span>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

module.exports = About;
