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
        <div className="title">Contact Me:</div>
        <p>
          <a
            className="readable link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/paul-o-connell-604"
            title="LinkedIn"
          >
            <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,h_102,w_131/v1622842617/linked-inLogo_arbzyw.webp" />
            <br />
            www.linkedin.com/in/paul-o-connell-604
          </a>
          <br />
          <br />
          <a
            className="readable link"
            target="_blank"
            href="https://github.com/pauloconnell"
            rel="noopener noreferrer"
            title="GitHub Repos"
          >
            <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,g_face,w_118/v1622847396/GitHub-Mark_hnhn3m.png" />
            <br />
            https://github.com/pauloconnell
          </a>

          <br />
          <br />
          <a
            className="readable link"
            href="mailto:p_ollie@hotmail.com?Subject=FromProfile"
            target="_blank"
            title="p_ollie@hotmail.com"
          >
            Click here to Email Me
          </a>
        </p>
        <br />
        <br />
        <br />
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
      </center>
    </div>
  );
};

module.exports = Contact;
