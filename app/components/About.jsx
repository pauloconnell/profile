const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <div class="textAlign">
        <p>
          <b>
            <span className="readable big quote inlineBlock width90">
              "Interested in all aspects of Software Development, seeking
              employment where I can write clean code and help build our team
              and products stronger."
            </span>
          </b>
        </p>
        <br />
        <br />
        <br />
        <span className="title readable inlineBlock"></span>
        <br />
        <br />
        <span className="readEasy big inlineBlock lineHeight width80">
          <u className="title">FULLSTACK MERN CERTIFICATION:</u>
          <br />
          <br />
          The MERN Stack is: MongoDB, Express(server) React, Node.js 1800 Hours
          Certification awarded after completion of 6 Certifications:
          <br />
          <ul className="readEasy">
            <li>Quality Assurance and Information Security Certification </li>
            <li>Data Visualization with D3 Certification </li>
            <li>APIs and MicroServices Certification </li>
            <li>JavaScript Algorithms and Data Structures Certification </li>
            <li>Front End Development Libraries Certification </li>
            <li>Responsive Web Design Certification</li>
          </ul>
        </span>
        <br /> <br />
        <br />
        <br />
        <span className="center width80">
          <ul className="readEasy inlineBlock">
            <br />
            <li>
              <span className="">
                <span className="big">Responsive Web Design Certification</span>
                <br />
                <code>
                  HTML5, CSS, Applied Visual Design, Applied Accessibility,
                  Responsive Web Design Principles, CSS FlexBox, CSS Grid, and
                  e-forms
                </code>
                <br />
                <a href="https://www.freecodecamp.org/certification/fccd9e19c59/responsive-web-design">
                  Link to view this Certificate
                </a>
              </span>
            </li>
            <br />
            <hr></hr>
            <br />
            <li>
              <span className="">
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
                <br />
                <a href="https://www.freecodecamp.org/certification/fccd9e19c59/javascript-algorithms-and-data-structures">
                  View Certificate
                </a>
                <hr></hr>
              </span>
            </li>
            <li>
              <span className="">
                <span className="big">
                  Front End Development Libraries Certification
                </span>
                <br />
                <code>
                  Bootstrap, jQuery Sass, React and Redux. Building modern
                  responsive component based web applications capable of scaling
                  up.
                </code>
                <br />
                <a href="https://www.freecodecamp.org/certification/fccd9e19c59/front-end-libraries">
                  View Certificate
                </a>
                <hr></hr>
              </span>
            </li>
            <li>
              <span className="">
                <span className="big">Data Visualization Certification</span>
                <br />
                <code>
                  Using data to create different charts, graphs, hover elements,
                  and other ingredients to create dynamic and attractive data
                  visualizations.
                </code>
                <br />
                <a href="https://www.freecodecamp.org/certification/fccd9e19c59/data-visualization">
                  View Certificate
                </a>
                <hr></hr>
              </span>
            </li>

            <li>
              <span className="">
                <span className="big">
                  APIs and MicroServices Certification
                </span>
                <br />
                <code>
                  Back end with Node.js and npm (Node Package Manager). Also
                  building web applications with the Express framework, build
                  APIs and microservices with MongoDB and the Mongoose library.
                </code>
                <br />
                <a href="https://www.freecodecamp.org/certification/fccd9e19c59/apis-and-microservices">
                  View Certificate
                </a>
                <hr></hr>
              </span>
            </li>

            <li>
              <span className="">
                <span className="big">Quality Assurance Certification</span>
                <br />
                <code>
                  Advanced Node.js, Authentication with Passport, Social
                  Authentication, Template Engine allows server-side variable
                  rendering with Pug, and T Testing with Chai.
                </code>
              </span>
              <br />
              <a
                className="margin"
                href="https://www.freecodecamp.org/certification/fccd9e19c59/quality-assurance-v7"
              >
                View Certificate
              </a>
              <a
                className="margin"
                href="https://www.freecodecamp.org/certification/fccd9e19c59/information-security-and-quality-assurance"
              >
                View Certificate
              </a>
              <hr></hr>
            </li>
          </ul>
          <br />
          <span className="readEasy title">
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
