const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const Footer = require("./Footer");
/* the main page for the index route of this app */
const WebApps = function() {
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
      </div>
      <hr></hr>
      <h2 className="textAlign">
        <span className="readEasy title">Web Applications</span>
      </h2>
      <h3 className="textAlign">
        {" "}
        <span className="readEasy">
          Modern responsive custom Web Applications built using javaScript and
          React ect, deployed in the cloud.
        </span>
      </h3>
      <br />

      <br />
      <br />
      <div className="container">
        <a
          className="pos-one link"
          title="Delivers specific information for every item on sales floor and organizes similar models to increase sales conversions"
          href="https://codepen.io/p_ollie/full/qJjVgR"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title inlineBlock text">
              <strong>
                <u>Test Center</u>
                <br /> Product Knowledge App
                <br />
              </strong>
            </span>
          </div>
          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png"
          />
        </a>

        <a
          className="pos-two link"
          href="https://ianbunburydogschool.glitch.me"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title inlineBlock text">
              <strong>
                <u>
                  {" "}
                  Ian Bunbury
                  <br />
                  Dog Training
                </u>
              </strong>
            </span>

            <img
              className="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1615410052/profileBunbury_pcfb8t.png"
              alt="Ian Bunbury Dog School"
            />
          </div>
        </a>
      </div>

      <div className="container">
        <a
          className="pos-one link"
          title="Profile developed with pure HTML and CSS"
          href="https://codepen.io/p_ollie/full/ayJXyZ"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title text inlineBlock">
              <strong>Web Developer Profile </strong>
            </span>
          </div>
          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1631908054/profile_v31u4b.png"
            alt="Web Developer"
          />
        </a>

        <a
          className="pos-two link"
          href="https://codepen.io/p_ollie/full/VMVeQw"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title text inlineBlock">
              <strong>
                Wiki Search via API
                <br />
                <br />
              </strong>
            </span>
          </div>
          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1598909611/Wiki_search_avfb5n.png"
            alt="wiki search"
          />
        </a>
      </div>

      <div className="container">
        <a
          className="pos-one link"
          title="Detects GeoLocation then hits weather forcast API to display weather in your area"
          href="https://codepen.io/p_ollie/full/QqGGXB"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title text inlineBlock">
              <strong>
                API Local Weather Detector
                <br />
                <br />
              </strong>
            </span>
          </div>
          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1616001698/weather_f6qfif.png"
            alt="API Weather detector"
          />
        </a>

        <a
          className="pos-two link"
          href="https://codepen.io/p_ollie/full/ZEzNJWo"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title text inlineBlock">
              <strong>
                React Drum Machine
                <br />
                <br />
              </strong>
            </span>
          </div>
          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1590166330/Drum_Machien_ithb8w.jpg"
            alt="Drum Machine img loading"
          />
        </a>
      </div>

      <div className="container">
        <a
          className="pos-one link"
          href="https://cdpn.io/p_ollie/debug/xyRRyq/yPAJjKXXWKQA"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title text inlineBlock">
              <strong>
                Tic Tac Toe with AI Player
                <br />
                <br />
              </strong>
            </span>
          </div>
          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1590523056/ticTacToe_gduhcm.jpg"
            alt="tic-tac-toe game"
          />
        </a>

        <a
          className="pos-two link"
          href="https://codepen.io/p_ollie/full/RLrxPr"
          target="_blank"
        >
          <div className="border text-align">
            <span className="title text inlineBlock">
              <strong>
                <u>API Quote Generator</u>
              </strong>
              <br />
            </span>
          </div>

          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1598905735/API_quote_machien_cmbxot.png"
            alt="API Quote Generator"
          />
        </a>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

module.exports = WebApps;
