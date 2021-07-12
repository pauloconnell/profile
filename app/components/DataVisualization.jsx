const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const Footer = require("./Footer");
/* the main page for the index route of this app */
const DataVisualization = function() {
  return (
    <div>
      <div className="textAlign">
        <div className="gridContainer inlineBlock">
          <Link
            className="link width inlineBlock"
            id="fullStack"
            to="/fullStack"
          >
            <span className="center">
              Full Stack <br />
              Applications
            </span>
          </Link>

          <Link
            className="link width inlineBlock"
            id="d3"
            to="/DataVisualization"
          >
            <span className="center">
              Data <br />
              Visualization
            </span>
          </Link>

          <Link
            style={{ display: "inline-block" }}
            className="link width"
            id="webApps"
            to="/WebApps"
          >
            <span className="center">
              Web <br />
              Applications
            </span>
          </Link>
        </div>

        <hr></hr>

        <h2>
          {" "}
          <span className="title text readable">Data Visualization D3</span>
        </h2>
        <h3>
          <span className="text readable">
            API driven data displayed in browser using D3 library on SVG canvas
          </span>
        </h3>
        <hr></hr>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <a
            className="link pos-one"
            href="https://d3-challenge-4.pauloconnell.repl.co/"
            target="_blank"
          >
            <div className="border">
              <span className="title text">
                <strong>
                  Data Visualization: Population Education by Location
                </strong>
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png"
                alt="D3 Data Visualization"
              />
            </div>
          </a>
          <br />
          <br />
          <a
            className="link pos-two"
            href="https://d3-challenge-2-New.pauloconnell.repl.co"
            target="_blank"
          >
            <div className="border">
              <span className="title text">
                <strong>Data Visualization: Doping in Biking</strong>
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1622334690/d3_doping_in_biking_mtl8lk.png"
                alt="D3 Data Visualization"
              />
            </div>
          </a>
          <br />
          <br />
        </div>
        <div className="container">
          <a
            className="link pos-one"
            href="https://d3-Challenge-3.pauloconnell.repl.co"
            target="_blank"
          >
            <div className="border">
              <span className="title text">
                <strong>Data Visualization: Global Temperature History </strong>
              </span>
              <br />
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png"
                alt="D3 Data Visualization"
              />
            </div>
          </a>

          <br />
          <a
            className="link pos-two"
            href="https://codepen.io/p_ollie/full/GRZjQJJ"
            target="_blank"
          >
            <div className="border">
              <span className="title text">
                <strong>Data Visualization: Historical US GDP </strong>
              </span>
              <br />
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1622334021/d3_Us_GDP_nushwx.png"
                alt="D3 Data Visualization"
              />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

module.exports = DataVisualization;
