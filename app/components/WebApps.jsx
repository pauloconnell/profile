const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");

/* the main page for the index route of this app */
const WebApps = function() {
  return (
    <div>
      <h1>Web Applications</h1>
      <div className="row">
        <Link className="col link border" to="/about">
          About Me
        </Link>
        <br />
        <Link className="col link border" to="/Contact">
          Contact Me
        </Link>
        <br />
        <Link className="col link border" to="/">
          Profile
        </Link>
        <br />
      </div>
      <div class="row sectionTitle">Web Applications</div>
      <br />
      <div class="row containProjects">
        <div class="col-xs-6 project-tile" class="right">
          <a href="https://codepen.io/p_ollie/full/qJjVgR" target="_blank">
            <h1>
              <strong>
                <u>Test Center</u>
                <br /> Product Knowledge App
                <br />
              </strong>
            </h1>
            <img src="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png" />
          </a>
          <br />
          <br />
        </div>

        <div class="col-xs-6 project-tile" class="right">
          <a href="https://codepen.io/p_ollie/full/RLrxPr" target="_blank">
            <h1>
              <strong>
                <u>API Quote Generator</u>
                <br /> Social Media Posting
                <br />
              </strong>
            </h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/pollie/image/upload/v1598905735/API_quote_machien_cmbxot.png"
              alt="API Quote Generator"
            />
          </a>
          <br />
          <br />
        </div>
      </div>

      <p></p>
    </div>
  );
};

module.exports = WebApps;
