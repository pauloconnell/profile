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
        <br />
        <br />
        <div className="text">
          <h2>Full Stack MERN Applications</h2> Deployed in the cloud using:
          <br />
          <h3 class="readable">
            React, Express, MongoDB, Mongoose, Node.js, APIs, MicroServices
          </h3>
          <h4 class="readable">
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
            <div className="border">
              <span className="title text">
                <strong>Full Stack Message Board Web App</strong>
              </span>
              <br />
              <br />
              <br />
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610571643/messageBoard_km9wul.png"
                alt="Full Stack Message Board"
              />
              <br />
            </div>
          </a>

          <a
            className="pos-two link"
            href="https://exercisetrackerapi.glitch.me"
            target="_blank"
          >
            <div className="border">
              <span className="title text">
                <strong>
                  Exercise Tracker App using
                  <br /> MongoDB database
                  <br />
                </strong>
              </span>
              <br />
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
            <div class="responsive border">
              <span className="title title">
                <strong>Slang Translation App</strong>
              </span>
              <br />
              <br />
              <br />
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610564580/translate_yjhf3p.png"
                alt="translator app image"
              />
              <br />
            </div>
          </a>

          <a
            className="pos-two link"
            href="https://authentication-pug.glitch.me/"
            target="_blank"
          >
            <div className="responsive border ">
              <span className="title text">
                <strong>
                  Encrypted Authentication Using Passport and MongoDB
                  <br />
                </strong>
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
            <div className="responsive border ">
              <span className="title text">
                <strong>Suduko Solver Game</strong>
                <br />
                Solves board using recursion
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610747577/suduko_e2wjgi.png"
                alt="Full Stack Suduko Solver"
              />
              <br />
            </div>
          </a>

          <a
            className="pos-two link"
            href="https://stock-price-checker-paul.glitch.me/"
            target="_blank"
          >
            <div className="responsive border">
              <span className="title text">
                <strong>API Stock Price Checker</strong>
              </span>
              <br />
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610734887/StockPriceChecker_h0yedt.png"
                alt="Full Stack Web App"
              />

              <br />
              <br />
            </div>
          </a>
          <br />
        </div>
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

module.exports = FullStack;
