const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");

const dependenciesArray = [
  "express - middleware for the node server",
  "react - for generating the views of the app",
  "react-dom - powers the rendering of elements to the DOM, typically paired with React",
  "webpack - for bundling all the javascript",
  "webpack-cli - command line support for webpack",
  "jsx-loader - allows webpack to load jsx files",
  "react-router-dom - handles routing!"
];

const componentsMade = [
  "Profile- which is the view you are seeing now",
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
  'About - text content to show when "about" route is accessed'
];

/* the main page for the index route of this app */
const FullStack = function() {
  return (
    <div>
      <h1>Full Stack Applications</h1>
      <Link to="/about">About Me</Link>
      <br />
      <Link to="/Contact">Contact Me</Link>
      <br />
      <Link to="/">Profile</Link>
      <br />

      <div class="row containProjects">
        <div class="col-xs-6 project-tile" class="left">
          <a href="https://messageboard-anon.glitch.me/" target="_blank">
            <h1>
              <strong>Full Stack Message Board Web App</strong>
            </h1>
            <br />
            <br />
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/pollie/image/upload/v1610571643/messageBoard_km9wul.png"
              alt="Full Stack Message Board"
            />
            <br />
            <br />
            <br />
            <br />
          </a>
        </div>
        <div class="col-xs-6 project-tile" class="right">
          <a href="https://exercisetrackerapi.glitch.me" target="_blank">
            <h1>
              <strong>
                <u>Full Stack Application</u>
                <br /> Using MongoDB database
                <br />
              </strong>
            </h1>
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/pollie/image/upload/v1606166908/xTracker_nm1gfn.png"
              alt="Full Stack Web App"
            />
          </a>
          <br />
          <br />
        </div>
      </div>

      <div class="row containProjects">
        <div class="col-xs-6 project-tile" class="left">
          <a
            href="https://QA-5-american-british-english-translator.pauloconnell.repl.co"
            target="_blank"
          >
            <h1>
              <strong>Full Stack Translate Web App</strong>
            </h1>{" "}
            <br />
            <br />
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/pollie/image/upload/v1610564580/translate_yjhf3p.png"
              alt="D3 Data Visualization"
            />
            <br />
            <br />
            <br />
            <br />
          </a>
        </div>
        <div class="col-xs-6 project-tile" class="right">
          <a href="https://authentication-pug.glitch.me/" target="_blank">
            <h1>
              <strong>
                <u>Full Stack Application</u>
                <br /> Authentication
                <br />
              </strong>
            </h1>
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/pollie/image/upload/v1610815824/Authenticate-Pug_awfw7d.png"
              alt="Full Stack Web App"
            />
          </a>
          <br />
          <br />
        </div>
      </div>

      <div class="row containProjects">
        <div class="col-xs-6 project-tile" class="left">
          <a
            href="https://qa-4-suduko-solver.pauloconnell.repl.co/"
            target="_blank"
          >
            <h1>
              <strong>Full Stack Suduko Solver Game</strong>
            </h1>{" "}
            <br />
            <br />
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/pollie/image/upload/v1610747577/suduko_e2wjgi.png"
              alt="Full Stack Suduko Solver"
            />
            <br />
            <br />
            <br />
            <br />
          </a>
        </div>
        <div class="col-xs-6 project-tile" class="right">
          <a href="https://stock-price-checker-paul.glitch.me/" target="_blank">
            <h1>
              <strong>
                <u>Full Stack Application</u>
                <br /> API Stock Price Checker
                <br />
              </strong>
            </h1>
            <br />
            <br />
            <br />
            <img
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
  );
};

module.exports = FullStack;
