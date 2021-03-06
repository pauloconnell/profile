const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const Footer = require("./Footer");
/* the main page for the index route of this app */
const FullStack = function() {
  return (
    <div>
      <center>
        <div className="textAlign">
          <div className="gridContainer inlineBlock">
            <Link
              className="link width inlineBlock"
              id="fullStack"
              to="/fullStack"
            >
              <span className="center">
                Full Stack <br />
                Applications
              </span>
            </Link>

            <Link
              className="link width inlineBlock"
              id="d3"
              to="/DataVisualization"
            >
              <span className="center">
                Data <br />
                Visualization
              </span>
            </Link>

            <Link
              style={{ display: "inline-block" }}
              className="link width"
              id="webApps"
              to="/WebApps"
            >
              <span className="center">
                Web <br />
                Applications
              </span>
            </Link>
          </div>
        </div>
        <hr></hr>
        <div className="">
          <h2>
            <span className="readEasy title">Full Stack MERN Applications</span>
          </h2>
          <br />
          <h3 class="readEasy inlineBlock">
            Deployed in the cloud using:
            <br />
            React, Express, MongoDB, Mongoose, Node.js, API MicroServices
          </h3>
          <br />
          <h4 class="readEasy inlineBlock">
            HTML, JavaScript, Css, Bootstrap, jQuerry, GitHub
          </h4>
        </div>
        <br />
        <br />
        <div className="container">
          <a
            className="pos-one link"
            href="https://messageboard-anon.glitch.me/"
            target="_blank"
          >
            <div
              className="border"
              title="This App allows anonymous users to set password protected content on database 'boards'"
            >
              <span className="title text">
                <strong>Anonymous Message Board Web App</strong>
              </span>

              <span className="small"></span>
              <br />

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610571643/messageBoard_km9wul.png"
                alt="Full Stack Message Board"
              />
            </div>
          </a>

          <a
            className="pos-two link"
            href="https://exercisetrackerapi.glitch.me"
            target="_blank"
          >
            <div
              className="border"
              title="This app creates an API to Querry database results for users
                  results. The app creates unique userId for each user to log
                  exercises and track on the database via API Querries."
            >
              <span className="title text">
                <strong>Exercise Tracker App</strong>
              </span>

              <span className="small">
                <small></small>
              </span>
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1606166908/xTracker_nm1gfn.png"
                alt="Full Stack Web App"
              />
            </div>
          </a>
        </div>
        <br />
        <div className="container">
          <a
            className="pos-one link"
            href="https://QA-5-american-british-english-translator.pauloconnell.repl.co"
            target="_blank"
          >
            <div
              class="border"
              title="This app converts from British spelling/slang to US and Vise-Versa"
            >
              <span className="title text">
                <strong>Slang Translation App</strong>
              </span>
              <br />
              <span className="small">
                <small></small>
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610564580/translate_yjhf3p.png"
                alt="translator app image"
              />
            </div>
          </a>

          <a
            className="pos-two link"
            href="https://authentication-pug.glitch.me/"
            target="_blank"
          >
            <div
              className="border"
              title="This app encrypts login details, stores users details on
                  database, and allows secure login with Passport.js"
            >
              <span className="title text">
                <strong>
                  Encrypted Authentication Using Passport and MongoDB
                </strong>
              </span>

              <span className="small">
                <small></small>
              </span>
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610815824/Authenticate-Pug_awfw7d.png"
                alt="Full Stack Web App"
              />

              <br />
            </div>
          </a>
        </div>
        <br />
        <div className="container">
          <a
            className="pos-one link"
            href="https://qa-4-suduko-solver.pauloconnell.repl.co/"
            target="_blank"
          >
            <div
              className="border"
              title="This app implements suduko logic and solves any board using recursion"
            >
              <span className="title text">
                <strong>Suduko Solver Game</strong>
              </span>

              <span className="small"></span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610747577/suduko_e2wjgi.png"
                alt="Full Stack Suduko Solver"
              />
            </div>
          </a>

          <a
            className="pos-two link"
            href="https://stock-price-checker-paul.glitch.me/"
            target="_blank"
          >
            <div
              className="border"
              title="Takes user input, hits API to get stock price, hits Database to store likes for each stock from unique IP addresses, and shows comparision of likes."
            >
              <span className="title text">
                <strong>API Stock Price Checker</strong>
              </span>

              <span className="small"></span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610734887/StockPriceChecker_h0yedt.png"
                alt="Full Stack Web App"
              />
            </div>
          </a>
          <br />
        </div>
        <Footer />
      </center>
    </div>
  );
};

module.exports = FullStack;
