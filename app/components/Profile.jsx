const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const styles = require("../app.css");
const ReactTooltip = require("react-tooltip");

const dependenciesArray = [
  "express - middleware for the node server",
  "react - for generating the views of the app",
  "react-dom - powers the rendering of elements to the DOM, with React",
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
  "About -About Me"
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
        <br />
        <div className="textAlign ">
          <p
            title="Click any of the options below:"
            className="title readable text inlineBlock width"
          >
            See My work: <br />
          </p>
        </div>
        <br />
        <br />
        <div className="textAlign ">
          <div className="gridContainer inlineBlock">
            <span>
              <Link
                className="link width inlineBlock top"
                id="fullStack"
                to="/fullStack"
              >
                <span
                  title="These applications use Express Server and MongoDB Database"
                  className="center"
                >
                  Full Stack <br />
                  Applications
                </span>
              </Link>
            </span>
            <Link
              className="link width inlineBlock middle"
              id="d3"
              to="/DataVisualization"
            >
              <span
                className="center"
                title="Data Visualization using D3 JavaScript Library"
              >
                Data <br />
                Visualization
              </span>
            </Link>

            <Link
              className="link width inlineBlock bottom"
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

        <br />
        <br />
        <div className="textAlign">
          <span className="inlineBlock">
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
              <span className="readable">`Click button to show details`</span>
            )}
          </span>
        </div>
      </div>
    );
  }
}
module.exports = Profile;
