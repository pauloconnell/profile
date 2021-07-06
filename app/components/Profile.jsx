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
  "Delete- this will be deleted...but kindof good idea to render all components veiwable 'onclick' on one page...",
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
          <br />
          <span className="title readable text">See My work: </span>
          <br />
          <br />
          <div className="grid">
            <Link
              style={{ display: "inline-block" }}
              className="link"
              id="fullStack"
              to="/fullStack"
            >
              <span>
                Full Stack <br />
                Applications
              </span>
            </Link>

            <Link
              style={{ display: "inline-block" }}
              className="link"
              id="d3"
              to="/DataVisualization"
            >
              <span>
                Data <br />
                Visualization
              </span>
            </Link>

            <Link
              style={{ display: "inline-block" }}
              className="link"
              id="webApps"
              to="/WebApps"
            >
              <span>
                Web <br />
                Applications
              </span>
            </Link>
          </div>

          <br />
          <br />
          <span>
            <button
              type="button"
              className="btn btn-success"
              onClick={e => this.handleClick(e)}
            >
              about this app
            </button>
            <br />

            {this.state.showThis ? (
              <div className="readable">
                This profile app was built by Paul O'Connell using React and
                node.js <br />
                It uses a few dependencies, including React router and:
                <UnorderedList items={dependenciesArray} />
              </div>
            ) : (
              <span className="">`Click button to show details`</span>
            )}
          </span>
        </center>
      </div>
    );
  }
}
module.exports = Profile;
