const MyWork = require("./links/MyWork");
const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const Footer = require("./Footer");
/* the main page for the index route of this app */
const DataVisualization2 = function () {
  return (
    <div className="container-fluid">
      <MyWork />
      <hr></hr>
      <h2 className=" mb-3 textAlign">
        <span className="readEasy title">Data Visualization D3</span>
      </h2>
      <h3 className="mb-5 textAlign">
        <span className="readEasy">
          API driven data displayed in browser using D3 library on SVG canvas
        </span>
      </h3>

      <div className="row mx-1">
        <section className="col-12 col-sm-6 text-center py-1 ">
          <a
            className="link pos-one d-block h-100"
            href="https://d3-challenge-4.pauloconnell.repl.co/"
            target="_blank"
          >
            <div className=" h-100">
              <span className="title text">
                <strong>
                  Data Visualization: Population Education by Location
                </strong>
              </span>
              <div class=" h-100 d-flex align-items-start ">
                <img
                  className="img-fluid "
                  src="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png"
                  alt="D3 Data Visualization"
                />
              </div>
            </div>
          </a>
        </section>

        <section className="col-12 col-sm-6 text-center py-1">
          <a
            className="link pos-two d-block h-100"
            href="https://d3-challenge-2-New.pauloconnell.repl.co"
            target="_blank"
          >
            <div className=" h-100">
              <span className="title text">
                <strong>Data Visualization: Doping in Biking</strong>
              </span>
              <div class=" h-100 d-flex align-items-center">
                <img
                  className="img-fluid "
                  src="https://res.cloudinary.com/pollie/image/upload/v1622334690/d3_doping_in_biking_mtl8lk.png"
                  alt="D3 Data Visualization"
                />
              </div>
            </div>
          </a>
        </section>
      </div>

      <div className="row mx-1">
        <section className="col-12 col-sm-6 text-center py-1">
          <a
            className="link pos-one d-block h-100"
            href="https://d3-Challenge-3.pauloconnell.repl.co"
            target="_blank"
          >
            <div className=" h-100">
              <span className="title text">
                <strong>Data Visualization: Global Temperature History </strong>
              </span>
              <br />
              <div class="d-flex align-items-start h-100">
                <img
                  className="img-fluid "
                  src="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png"
                  alt="D3 Data Visualization"
                />
              </div>
            </div>
          </a>
        </section>

        <section className="col-12 col-sm-6 text-center py-1">
          <a
            className="link pos-two d-block h-100"
            href="https://codepen.io/p_ollie/full/GRZjQJJ"
            target="_blank"
          >
            <div className=" h-100">
              <span className="title text">
                <strong>Data Visualization: Historical US GDP </strong>
              </span>
              <br />
              <div class="d-flex align-items-center h-100">
                <img
                  className="img-fluid "
                  src="https://res.cloudinary.com/pollie/image/upload/v1622334021/d3_Us_GDP_nushwx.png"
                  alt="D3 Data Visualization"
                />
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

module.exports = DataVisualization2;
