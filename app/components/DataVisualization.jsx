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
        <div className="title readable">
          API driven data displayed in browser using D3 library on SVG canvas
        </div>
        <br />
        <br />

        <a href="https://d3-challenge-4.pauloconnell.repl.co/" target="_blank">
          <div className="link border title">
            <strong>Data Visualization Population stats</strong>

            <img
              class="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png"
              alt="D3 Data Visualization"
            />
          </div>
        </a>
        <br />
        <br />
        <br />
        <br />

        <a href="https://d3-Challenge-3.pauloconnell.repl.co" target="_blank">
          <div className="title link border">
            <strong>Data Visualization Global Temperature History </strong>

            <br />
            <img
              class="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png"
              alt="D3 Data Visualization"
            />
          </div>
        </a>
        <br />
        <br />
        <br />
        <br />

        <p></p>
      </center>
    </div>
  );
};

module.exports = DataVisualization;
