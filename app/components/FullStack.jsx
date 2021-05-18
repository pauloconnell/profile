const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");

/* the main page for the index route of this app */
const FullStack = function() {
  return (
    <div>
      <center>
        <h1 className="text" id="name">
          Paul O'Connell
        </h1>
        <div className="row">
          <Link className="col link" to="/about">
            About Me
          </Link>
          <br />
          <Link className="col link" to="/contact">
            Contact Me
          </Link>
          <br />
          <Link className="col link" to="/">
            Profile
          </Link>
        </div>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-xs-5 left responsive">
              <a href="https://messageboard-anon.glitch.me/" target="_blank">
                <h4>
                  <strong>Full Stack Message Board Web App</strong>
                </h4>
                <br />
                <br />
                <br />
                <br />
                <img
                  class="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610571643/messageBoard_km9wul.png"
                  alt="Full Stack Message Board"
                />
                <br />
                <br />
                <br />
                <br />
              </a>
            </div>
            <div class="col-xs-5 offset-sm-2 right responsive">
              <a href="https://exercisetrackerapi.glitch.me" target="_blank">
                <h4>
                  <strong>
                    <u>Full Stack Application</u>
                    <br /> Using MongoDB database
                    <br />
                  </strong>
                </h4>
                <br />
                <br />
                <img
                  class="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1606166908/xTracker_nm1gfn.png"
                  alt="Full Stack Web App"
                />
              </a>
              <br />
              <br />
            </div>
          </div>
          <br />
          <div class="row responsive">
            <div class="col-xs-6 project-tile left">
              <a
                href="https://QA-5-american-british-english-translator.pauloconnell.repl.co"
                target="_blank"
              >
                <h3>
                  <strong>Full Stack Translate Web App</strong>
                </h3>{" "}
                <br />
                <br />
                <br />
                <br />
                <img
                  class="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610564580/translate_yjhf3p.png"
                  alt="translator app image"
                />
                <br />
                <br />
                <br />
                <br />
              </a>
            </div>
            <br />
            <div class="col-xs-6 project-tile right">
              <a href="https://authentication-pug.glitch.me/" target="_blank">
                <h3>
                  <strong>
                    <u>Full Stack Application</u>
                    <br /> Authentication
                    <br />
                  </strong>
                </h3>
                <br />
                <br />
                <img
                  class="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610815824/Authenticate-Pug_awfw7d.png"
                  alt="Full Stack Web App"
                />
              </a>
              <br />
              <br />
            </div>
          </div>
          <br />
          <div class="row containProjects">
            <div class="col-xs-6 project-tile left">
              <a
                href="https://qa-4-suduko-solver.pauloconnell.repl.co/"
                target="_blank"
              >
                <h3>
                  <strong>Full Stack Suduko Solver Game</strong>
                </h3>{" "}
                <br />
                <br />
                <br />
                <br />
                <img
                  class="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610747577/suduko_e2wjgi.png"
                  alt="Full Stack Suduko Solver"
                />
                <br />
                <br />
                <br />
                <br />
              </a>
            </div>
            <div class="col-xs-6 project-tile right">
              <a
                href="https://stock-price-checker-paul.glitch.me/"
                target="_blank"
              >
                <h3>
                  <strong>
                    <u>Full Stack Application</u>
                    <br /> API Stock Price Checker
                    <br />
                  </strong>
                </h3>
                <br />
                <br />
                <br />
                <img
                  class="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610734887/StockPriceChecker_h0yedt.png"
                  alt="Full Stack Web App"
                />
              </a>
              <br />
              <br />
            </div>
          </div>

          <p></p>
        </div>
      </center>
    </div>
  );
};

module.exports = FullStack;
