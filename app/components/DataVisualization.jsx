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
          <Link className="col link" to="/about">
            About Me
          </Link>
          <br />
          <Link className="col link" to="/contact">
            Contact Me
          </Link>
          <br />
          <Link className="col link" to="/">
            Home
          </Link>
        </div>
        <h2>Full Stack Software Developer</h2>

        <br />

        <h1>Data Visualizations using D3</h1>

        <h4 class="row responsive">Data Visualization with D3</h4>
        <br />
        <div class="row ">
          <div class="col-xs-6 left">
            <a
              href="https://d3-challenge-4.pauloconnell.repl.co/"
              target="_blank"
            >
              <h4>
                <strong>Data Visualization with D3</strong>
              </h4>{" "}
              <br />
              <img
                src="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png"
                alt="D3 Data Visualization"
              />
              <br />
              <br />
              <br />
              <br />
            </a>
          </div>

          <div class="col-xs-6 " class="right">
            <a
              href="https://d3-Challenge-3.pauloconnell.repl.co"
              target="_blank"
            >
              <h4>
                <strong>Data Visualization with D3</strong>
              </h4>{" "}
              <br />
              <img
                src="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png"
                alt="D3 Data Visualization"
              />
              <br />
              <br />
              <br />
              <br />
            </a>
          </div>
        </div>

        <p></p>
      </center>
    </div>
  );
};

module.exports = DataVisualization;
