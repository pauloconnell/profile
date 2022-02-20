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
  "css-loader - allows webpack to load css files",
];

const componentsMade = [
  "Delete- this will be deleted...but kindof good idea to render all components veiwable 'onclick' on one page...",
  "Profile- which is the view you are seeing now",
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
  "About -About Me",
];

/* the main page for the index route of this app */

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showThis: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHoverIn = this.handleHoverIn.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
  }

  handleClick() {
    this.setState({
      showThis: !this.state.showThis,
    });
    console.log("handled ", this.state.showThis);
  }

  handleHoverIn() {
    document.getElementById("showOnHover").classList.delete("hidden");
    document.getElementById("showOnHover").classList.add("show");
  }

  handleHoverOut() {
    document.getElementById("showOnHover").classList.delete("show");
    document.getElementById("showOnHover").classList.add("hidden");
  }

  render() {
    return (
      <div>
        <br />
        <div className="textAlign">
          <div className="width80 readEasy wordSpace text-align">
            <i>
              <span className="lineHeight wordSpace">
                Keen problem solver interested in all aspects of Software
                Development, currently working full time as Senior Front End
                Developer for a start up that could become really huge!!! <br />
                I write clean code and enjoy helping build quality software.
              </span>
            </i>
          </div>
          <br />
          <br />
          <div className="readable width80">
            <p className="title inlineBlock text">
              Certified M.E.R.N. Full Stack Software Developer
            </p>
            <div
              id="showOnHover"
              className=""
              
              
            >
              Tech Stack:
              <div className="wordSpace">
                <div className="small readable inlineBlock">
                  MongoDB, Mongoose, DataBases deployed on AWS, Express Server,
                  React, Node, HTML, CSS, Bootstrap, JavaScript, jQuerry, D3,
                  Passport, OAuth, Pug(Jade), previously learned C++ and Java
                  EE. Currently coding Razor pages with C# with the back end
                  team working on .Net with Azure and SQL.
                </div>
              </div>
            </div>
          </div>

          <p
            title="Click any of the options below:"
            className="title readable text inlineBlock width marginTop"
          >
            See My work:
          </p>
        </div>
        <br />
        <br />
        <div className="textAlign ">
          <div className="gridContainer inlineBlock">
            <span title="These applications use Express Server and MongoDB Database">
              <Link
                className="link width inlineBlock top"
                id="fullStack"
                to="/fullStack"
              >
                <span className="center">
                  Full Stack <br />
                  Applications
                </span>
              </Link>
            </span>
            <Link
              title="Data Visualization using javaScript D3 Library"
              className="link width inlineBlock middle"
              id="d3"
              to="/DataVisualization"
            >
              <span className="center">
                Data <br />
                Visualization
              </span>
            </Link>

            <Link
              title="Front End Web Applications"
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
              title="Click button to show details"
              type="button"
              className="btn btn-success"
              onClick={(e) => this.handleClick(e)}
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
