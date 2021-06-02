const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <center>
        <h1 className="text" id="name">
          Paul O'Connell
        </h1>
        <div className="row">
          <Link className="col link border" to="/about">
            About Me
          </Link>
          <br />
          <Link className="col link border" to="/contact">
            Contact Me
          </Link>
          <br />
          <Link className="col link border" to="/">
            Home
          </Link>
        </div>
        <h2>Full Stack Software Developer</h2>
        <br />
        <p>
          <b>
            <span className="readable big">
              "Interested in working in Front End and/or Back End where I can
              write clean code and help build our team and products stronger."
            </span>
          </b>
        </p>
        <br />
        <br />
        <br />

        <span className="title readable">
          Certified Full Stack Software Developer
        </span>

        <h4 className="readable">
          <u>FULLSTACK MERN CERTIFICATION INCLUDES:</u>
        </h4>

        <span className="readable">
          <ol className="readable">
            <br />
            <br />
            <li>
              Responsive Web Design Certification <br />
            </li>
            <br />
            <li>JavaScript Algorithms and Data Structures Certification</li>
            <br />
            <br />
            <li>Front End Development Libraries Certification</li>
            <br />
            <br />
            <li>Data Visualization Certification</li>
            <br />
            <br />
            <li>APIs and MicroServices Certification</li>
            <br />
            <li>Quality Assurance Certification</li>
            <br /> <br />
          </ol>
          Full Stack Certification: 1800 hours <br />
        </span>
      </center>
    </div>
  );
};

module.exports = About;
