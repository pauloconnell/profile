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
        <div className="row ">
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

        <p className="readable">
          <b>
            <big>
              Interested in working in any/all parts of the stack where I can
              write clean code and help build our team and products stronger."
            </big>
          </b>
        </p>
        <br />
        <br />
        <br />

        <h2 className='readable'>Certified Full Stack Software Developer</h2>

        <li>
          <h4 className="readable">
            Responsive Web Design Certification <br />
            <br />
            JavaScript Algorithms and Data Structures Certification
            <br />
            <br />
            Front End Development Libraries Certification
            <br />
            <br />
            Data Visualization Certification
            <br />
            <br />
            APIs and MicroServices Certification
            <br />
            Quality Assurance Certification
            <br /> <br />
            Full Stack Certification: 1800 hours <br />
          </h4>
        </li>
      </center>
    </div>
  );
};

module.exports = About;
