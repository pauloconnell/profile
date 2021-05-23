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

        <br />

        <div class="resposive">
          <a
            href="https://d3-challenge-4.pauloconnell.repl.co/"
            target="_blank"
          >
            <h4>
              <strong>Data Visualization with D3</strong>
            </h4>
            <img
              class="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png"
              alt="D3 Data Visualization"
            />
            <br />
            <br />
            <br />
            <br />
          </a>
        </div>

        <div class="responsive">
          <a href="https://d3-Challenge-3.pauloconnell.repl.co" target="_blank">
            <h4>
              <strong>Data Visualization with D3</strong>
            </h4>
            <br />
            <img
              class="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png"
              alt="D3 Data Visualization"
            />
            <br />
            <br />
            <br />
            <br />
          </a>
        </div>

        <p></p>
      </center>
    </div>
  );
};

module.exports = DataVisualization;
