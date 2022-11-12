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
  "bootstrap 5 - classic CSS library",
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
      hovering: false,
      highlightFE: false,
      highlightBE: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHoverIn = this.handleHoverIn.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
    this.handleHoverFE = this.handleHoverFE.bind(this);
    this.handleHoverBE = this.handleHoverBE.bind(this);
  }

  handleClick() {
    this.setState({
      showThis: !this.state.showThis,
    });
    console.log("handled click ", this.state.showThis);
  }

  handleHoverFE() {
    this.setState(
      {
        highlightFE: !this.state.highlightFE,
      },
      () => console.log("handled FE", this.state.highlightFE)
    );
  }
  handleHoverBE() {
    this.setState(
      {
        highlightBE: !this.state.highlightBE,
      },
      () => console.log("handled BE", this.state.highlightBE)
    );
  }
  handleHoverIn() {
    this.setState({
      hovering: true,
    });
    //document.getElementById("showOnHover").classList.delete("hidden");
    //document.getElementById("showOnHover").classList.add("show");
  }

  handleHoverOut() {
    this.setState({
      hovering: false,
    });

    // document.getElementById("showOnHover").classList.delete("show");
    // document.getElementById("showOnHover").classList.add("hidden");
  }

  render() {
    const { hovering } = this.state;
    return (
      <div className="textAlign my-3">
        <div className="">
          <div className="width90 readEasy wordSpace m-auto my-3 ">
            <i>
              <div className="lineHeight wordSpace ">
                Keen problem solver interested in all aspects of Software
                Development,
                <br /> currently working full time as Senior Front End Developer
                for a start up that could become huge!!! <br />I write clean
                code and enjoy helping build quality software.
              </div>
            </i>
          </div>

          <div className="readable width90 m-auto my-3 marginTop">
            <p className="title inlineBlock text">
              Certified M.E.R.N. Full Stack Software Developer
            </p>
          </div>
          <div
            onMouseEnter={this.handleHoverIn}
            onMouseLeave={this.handleHoverOut}
            style={{ minHeight: "10px" }}
          >
            {/* old hover method:  
                style={{ display: hovering ? "block" : "none"  }}
               */}
            <div id="showOnHover" className=" width90 fade-in-info">
              <div className="wordSpace" style={{ minHeight: "300px" }}>
                <div className="small readable container-fluid">
                  <div className="row ">
                    <div className="text-center fs-2">Tech Stack:</div>
                  </div>
                  <div className="row">
                    <span
                      className="col fs-3"
                      onMouseEnter={this.handleHoverFE}
                      onMouseLeave={this.handleHoverFE}
                      style={{
                        color: this.state.highlightFE ? "blue" : "black",
                      }}
                    >
                      FrontEnd
                    </span>
                    <span
                      className="col fs-3"
                      onMouseEnter={this.handleHoverBE}
                      onMouseLeave={this.handleHoverBE}
                      style={{
                        color: this.state.highlightBE ? "purple" : "black",
                      }}
                    >
                      BackEnd
                    </span>
                  </div>
                  <br />
                  <div className="row ">
                    <span className="text-center">
                      <span
                        style={{
                          color: this.state.highlightFE ? "blue" : "black",
                          fontSize: this.state.highlightFE ? "125%" : " 100%",
                        }}
                      >
                        React, HTML, CSS, Bootstrap, JavaScript, Vue3, .Net:
                        RazorPages & RazorComponents c#
                      </span>
                      <br />
                      <span
                        style={{
                          color: this.state.highlightBE ? "white" : "black",
                          fontSize: this.state.highlightBE ? "125%" : " 100%",
                        }}
                      >
                        Node,MongoDB, Mongoose, DataBases deployed on AWS,
                        Express Server, jQuerry, D3, Passport, OAuth, Pug(Jade).
                      </span>
                      <br />
                      At University, I learned bit manipulation assembly
                      language, C++ and Java EE. <br />
                      <span
                        style={{
                          color: this.state.highlightFE ? "blue" : "black",
                          fontSize: this.state.highlightFE ? "125%" : " 100%",
                        }}
                      >
                        Built 2 sided e-Commerce site coding Razor pages with
                        C#, using Azure Devops, and Postman to test/ build API
                        connections.
                      </span>
                      <br />
                      <span
                        style={{
                          color: this.state.highlightBE ? "white" : "black",
                          fontSize: this.state.highlightBE ? "125%" : " 100%",
                        }}
                      >
                        The back end team works on .Net with SQL and
                        <span
                          style={{
                            color: this.state.highlightFE ? "blue" : "black",
                            fontSize: this.state.highlightFE ? "125%" : " 100%",
                          }}
                        >
                          &nbsp; Azure devops.
                        </span>
                      </span>
                      <br />
                      <span
                        style={{
                          color: this.state.highlightFE ? "blue" : "black",
                          fontSize: this.state.highlightFE ? "125%" : " 100%",
                        }}
                      >
                        Currently in final stages of building out web App in
                        JavaScript Vue3
                      </span>
                      &nbsp; with &nbsp;
                      <span
                        style={{
                          color: this.state.highlightBE ? "white" : "black",
                          fontSize: this.state.highlightBE ? "125%" : " 100%",
                        }}
                      >
                        Nuxt 3
                      </span>
                      &nbsp; and &nbsp;
                      <span
                        style={{
                          color: this.state.highlightFE ? "blue" : "black",
                          fontSize: this.state.highlightFE ? "125%" : " 100%",
                        }}
                      >
                        Pinia state management.
                      </span>
                    </span>
                  </div>
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
