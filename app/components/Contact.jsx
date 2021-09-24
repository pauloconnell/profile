const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const Contact = function() {
  return (
    <div>
      <div className="textAlign">
        <span className="title text readable">Contact Me:</span>
        <p>
          <div className="inlineBlock">
            <a
              className="link border inlineBlock"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/paul-o-connell-604"
              title="LinkedIn"
            >
              <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,h_102,w_131/v1622842617/linked-inLogo_arbzyw.webp" />
              <br />
              www.linkedin.com/in/paul-o-connell-604
            </a>
          </div>
          <br />
          <br />
          <div>
            <a
              className="link border inlineBlock"
              target="_blank"
              href="https://github.com/pauloconnell"
              rel="noopener noreferrer"
              title="GitHub Repos"
            >
              <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,g_face,w_118/v1622847396/GitHub-Mark_hnhn3m.png" />
              <br />
              https://github.com/pauloconnell
            </a>
          </div>
          <br />
          <br />
          <div>
            <a
              className="link border inlineBlock"
              href="mailto:p_ollie@hotmail.com?Subject=FromProfile"
              target="_blank"
              title="p_ollie@hotmail.com"
            >
              Click here to Email Me
            </a>
          </div>
        </p>
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

module.exports = Contact;
