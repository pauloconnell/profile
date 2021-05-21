const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const Contact = function() {
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
        <h1>Contact</h1>
        <p>
          <a
            target="_blank"
            href="https://github.com/pauloconnell"
            rel="noopener noreferrer"
          >
            GitHub: https://github.com/pauloconnell
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/paul-o-connell-604"
          >
            Linked In: www.linkedin.com/in/paul-o-connell-604
          </a>
        </p>
        Email Me:
        <a href="mailto:p_ollie@hotmail.com?Subject=FromProfile" Target="_top">
          <button>p_ollie@hotmail.com</button>
        </a>
        <br />
        <br />
        <Link className="link" to="/about">
          About Me
        </Link>
        <br />
        <Link className="link" to="/">
          Profile
        </Link>
      </center>
    </div>
  );
};

module.exports = Contact;
