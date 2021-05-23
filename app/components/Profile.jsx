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

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showThis: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showThis: !this.state.showThis
    });
    console.log("handled ", this.state.showThis);
  }

  render() {
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

            <Link className="col link border" to="/Contact">
              Contact Me
            </Link>

            <Link className="col link border" to="/">
              Home
            </Link>
          </div>
          <h2>Full Stack Software Developer</h2>
          <br />

          <br />
          <h1 className="readable text">See My work:</h1>
          <div className="row">
            <span className="col-sm-4 " id="fullStack">
              <Link className="link border" to="/fullStack">
                <span class="work" >Full Stack Applications</span>
              </Link>
            </span>
            <span className="col-sm-4" id="d3">
              <Link className="link border" to="/DataVisualization">
                <span class="work" >Data Visualization</span>
              </Link>
            </span>

            <span className="col-sm-4" id="webApps">
              <Link className="link border" to="/WebApps">
                <span class="work" >Web Applications</span>
              </Link>
            </span>
          </div>
          <br />
          <br />
          <p>
            <button
              type="button"
              className="btn btn-success"
              onClick={e => this.handleClick(e)}
            >
              about this app
            </button>

            {this.state.showThis ? (
              <div className="readable">
                This is a profile app built by me using React! It uses only a
                few dependencies, with React including routing:
                <UnorderedList items={dependenciesArray} />
              </div>
            ) : (
              <div className="text">
                <br /> `Click button to show details`
              </div>
            )}
          </p>

          <p></p>
        </center>
      </div>
    );
  }
}
module.exports = Profile;
