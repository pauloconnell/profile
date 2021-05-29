const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
/* the main page for the index route of this app */
const WebApps = function() {
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
        <h2 className="readable">Full Stack Software Developer</h2>
        <br />

        <span className="readable title">Web Applications</span>
        <br />
        <br />
        <br />
        <div className="container">
          <a
            className="pos-one link"
            href="https://codepen.io/p_ollie/full/qJjVgR"
            target="_blank"
          >
            <div className="border">
              <span className="title text">
                <strong>
                  <u>Test Center</u>
                  <br /> Product Knowledge App
                  <br />
                </strong>
              </span>
            </div>
            <img
              class="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png"
            />
          </a>
          <br />
          <br />

          <a
            className="pos-two link"
            href="https://codepen.io/p_ollie/full/RLrxPr"
            target="_blank"
          >
            <div className="border">
              <span className="title text">
                <strong>
                  <u>API Quote Generator</u>
                  <br /> Social Media Posting
                  <br />
                  <br />
                </strong>
              </span>
            </div>
            <br />

            <img
              class="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1598905735/API_quote_machien_cmbxot.png"
              alt="API Quote Generator"
            />
          </a>
        </div>
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

module.exports = WebApps;
