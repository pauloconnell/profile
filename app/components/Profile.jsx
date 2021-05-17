const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const styles = require("../app.css");

const dependenciesArray = [
  "express - middleware for the node server",
  "react - for generating the views of the app",
  "react-dom - powers the rendering of elements to the DOM, typically paired with React",
  "webpack - for bundling all the javascript",
  "webpack-cli - command line support for webpack",
  "jsx-loader - allows webpack to load jsx files",
  "react-router-dom - handles routing!",
  "css-loader - allows webpack to load css files"
];

const componentsMade = [
  "Profile- which is the view you are seeing now",
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
  'About - text content to show when "about" route is accessed'
];

/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      <center>
        <h1>Paul O'Connell</h1>
        <h2>Full Stack Software Developer</h2>
        <br />
        <Link to="/about">About Me</Link>
        <br />
        <Link to="/Contact">Contact Me</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <h1>See My work:</h1>
        <Link to="/FullStack">Full Stack Applications</Link>
        <br />
        <Link to="/DataVisualization">Data Visualization</Link>
        <br />
        <Link to="/WebApps">Web Applications</Link>
        <br />
        <br />
        <p>
          This is a profile app built by me using React! It uses only a few
          dependencies, with React including routing:
        </p>

        <UnorderedList items={dependenciesArray} />

        <p></p>
      </center>
    </div>
  );
};

module.exports = HelloWorld;
