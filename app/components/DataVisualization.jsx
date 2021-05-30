const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
/* the main page for the index route of this app */
const DataVisualization = function() {
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
          <br />
          <Link className="col link border" to="/contact">
            Contact Me
          </Link>
          <br />
          <Link className="col link border" to="/">
            Home
          </Link>
        </div>

        <h2>Full Stack Software Developer</h2>
        <br />

        <span className="title readable">
          API driven data displayed in browser using D3 library on SVG canvas
        </span>
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
                <strong>Data Visualization Population stats</strong>
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
                <strong>Data Visualization Doping in Biking</strong>
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
                <strong>Data Visualization Global Temperature History </strong>
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
        <div className="row">
          <Link className="col link border" to="/about">
            About Me
          </Link>
          <br />
          <Link className="col link border" to="/contact">
            Contact Me
          </Link>
          <br />
          <Link className="col link border" to="/">
            Home
          </Link>
        </div>
      </center>
    </div>
  );
};

module.exports = DataVisualization;
