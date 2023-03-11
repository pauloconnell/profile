const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const MyWork = require("./links/MyWork");
const DynamicData = require("./DynamicData");
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
      highlightFE: true,
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
        highlightFE: true,
        highlightBE: false,
      },
      () => console.log("handled FE", this.state.highlightFE)
    );
  }
  handleHoverBE() {
    this.setState(
      {
        highlightFE: false,
        highlightBE: true,
      },
      () => console.log("handled BE", this.state.highlightBE)
    );
  }

  // this shows/hides details on home page PROFILE
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
          <div className="width90 readEasy word    m-auto my-3 animate">
            <i>
              <div className="lineHeight wordSpace ">
                Keen problem solver interested in all aspects of Software
                Development,
                <br /> currently working full time as Senior Front End Developer
                for a start up that could become huge - launching early 2023!!!
              </div>
            </i>
          </div>
          <div className=" width90 fade-in-info">
            <div className=" m-auto my-3 marginTop">
              <p className="title inlineBlock text">
                Certified M.E.R.N. Full Stack Software Developer
              </p>
            </div>
            <div
              onMouseEnter={this.handleHoverIn}
              onMouseLeave={this.handleHoverOut}
              style={{ minHeight: "420px" }}
            >
              {/* old hover method:  
                style={{ display: hovering ? "block" : "none"  }}
              
              // could use bootstrap tabs here?
              
              
              <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item">
                  <span
                    class="nav-link active"
                    aria-current="page"
                    onClick={() => {
                      document.querySelector(".fe").style.display = "block";
                      document.querySelector(".be").style.display = "none";
                    }}
                  >
                    Front End
                  </span>
                </li>
                <li class="nav-item">
                  <span
                    class="nav-link"
                    onClick={() => {
                      document.querySelector(".be").style.display = "block";
                      document.querySelector(".fe").style.display = "none";
                    }}
                  >
                    Back End
                  </span>
                </li>
              </ul>
 */}
              <div className=" width90 ">
                <div className="wordSpace" style={{ minHeight: "300px" }}>
                  <div className="small container-fluid">
                    <div className="row ">
                      <div className="text-center fs-2">Tech Stack:</div>
                    </div>
                    <div className="row">
                      <span
                        className="col fs-3 link"
                        style={{
                          color: this.state.highlightFE ? "blue" : "black",
                        }}
                        onClick={this.handleHoverFE}
                      >
                        FrontEnd
                      </span>
                      <span
                        className="col fs-3 link"
                        style={{
                          color: this.state.highlightBE ? "white" : "black",
                        }}
                        onClick={this.handleHoverBE}
                      >
                        BackEnd
                      </span>
                    </div>
                    <br />
                    <div className="row ">
                      <span className="text-center">
                        <span
                          id="fe"
                          style={{
                            color: this.state.highlightFE ? "blue" : "black",
                            fontWeight: this.state.highlightFE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightFE ? "block" : "none",
                          }}
                        >
                          React, HTML, CSS, JavaScript, Bootstrap, Vue3,
                          TypeScript, jQuerry, .Net: RazorPages,
                          RazorComponents, c#, C++ and Java EE.
                        </span>
                        <br />
                        <span
                          id="be"
                          style={{
                            color: this.state.highlightBE ? "white" : "black",
                            fontWeight: this.state.highlightBE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightBE ? "block" : "none",
                          }}
                        >
                          Certified on Node, MongoDB, Mongoose, DataBases
                          deployed on AWS, Express Server, D3, Passport, OAuth,
                          testing w/ Mocha, Pug(Jade).
                        </span>
                        <br />
                        <span
                          style={{
                            color: this.state.highlightFE ? "blue" : "black",
                            fontWeight: this.state.highlightFE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightFE ? "block" : "none",
                          }}
                        >
                          Built pixel perfect prototype of 2 sided e-Commerce
                          site in .NET, using HTML, CSS, and JavaScript on Razor
                          pages with C# data interface, using Azure Devops, and
                          Postman to build and test API connections.
                        </span>
                        <br />
                        <span
                          style={{
                            color: this.state.highlightBE ? "white" : "black",
                            fontWeight: this.state.highlightBE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightBE ? "block" : "none",
                          }}
                        >
                          Current project: The back end team works on .Net Azure
                          functions using both SQL and Cosmo DB.
                          <span
                            style={{
                              color: this.state.highlightFE ? "blue" : "black",
                              fontWeight: this.state.highlightFE
                                ? "bold"
                                : " normal",
                              display: this.state.highlightFE
                                ? "block"
                                : "none",
                            }}
                          >
                            &nbsp; Azure devops.
                          </span>
                        </span>
                        <br />
                        <span
                          style={{
                            color: this.state.highlightFE ? "blue" : "black",
                            fontWeight: this.state.highlightFE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightFE ? "block" : "none",
                          }}
                        >
                          Currently in final stages of building out full
                          featured web App. Note: Switched tech stacks from the
                          slower .NET prototype, to fast JavaScript, using Vue3
                          with Nuxt 3, utilizing local Storage and
                        </span>

                        <span
                          style={{
                            color: this.state.highlightBE ? "white" : "black",
                            fontWeight: this.state.highlightBE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightBE ? "block" : "none",
                          }}
                        >
                          and Nuxt 3.
                        </span>

                        <span
                          style={{
                            color: this.state.highlightFE ? "blue" : "black",
                            fontWeight: this.state.highlightFE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightFE ? "block" : "none",
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
          </div>
          <p
            title="Click any of the options below:"
            className="title readEasy inlineBlock width marginTop"
          >
            See My work:
          </p>
        </div>

        <MyWork class="mb-3" />

        <dynamicData data="isHere" />

        <div className="textAlign">
          <span className="inlineBlock">
            <button
              title="Click button to show details"
              type="button"
              className="btn btn-success my-3"
              onClick={(e) => this.handleClick(e)}
            >
              about this app
            </button>
            <br />

            {this.state.showThis ? (
              <div className="expandingReadable">
                This profile app was built by Paul O'Connell using React and
                node.js <br />
                It uses a few dependencies, including React router and:
                <UnorderedList items={dependenciesArray} />
              </div>
            ) : (
              <span className="expandingReadable fade-in-info">
                `Click above button to show details about this app.`
              </span>
            )}
          </span>
        </div>
      </div>
    );
  }
}
module.exports = Profile;
