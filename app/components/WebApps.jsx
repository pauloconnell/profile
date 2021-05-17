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
const WebApps = function() {
  return (
    <div>
      <h1>Web Applications</h1>
      <Link to="/about">About Me</Link>
      <br />
      <Link to="/Contact">Contact Me</Link>
      <br />
      <Link to="/">Profile</Link>
      <br />

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
