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
      <br />
      <br />
      <h2 className="textAlign">
        <span className="readable text title">Web Applications</span>
      </h2>
      <h3 className="text ">
        {" "}
        <span className="readable">
          Modern responsive custom Web Applications I have built using
          javaScript and React ect, deployed in the cloud.
        </span>
      </h3>
      <br />

      <br />
      <br />
      <div className="container">
        <a
          className="pos-one link"
          href="https://codepen.io/p_ollie/full/qJjVgR"
          target="_blank"
        >
          <div className="border">
            <span className="title text">
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
        <br />
        <br />

        <a
          className="pos-two link"
          href="https://codepen.io/p_ollie/full/VMVeQw"
          target="_blank"
        >
          <div className="border">
            <span className="title text">
              <strong>
                Wiki Search API
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
      <br />

      <div className="container">
        <a
          className="pos-one link"
          href="https://codepen.io/p_ollie/full/QqGGXB"
          target="_blank"
        >
          <div className="border">
            <span className="title text">
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
          <div className="border">
            <span className="title text">
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
          <div className="border">
            <span className="title text">
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
          <div className="border">
            <span className="title text">
              <strong>
                <u>API Quote Generator</u>
                <br /> Social Media Posting
                <br />
                <br />
              </strong>
            </span>
          </div>
          <br />

          <img
            className="responsive"
            src="https://res.cloudinary.com/pollie/image/upload/v1598905735/API_quote_machien_cmbxot.png"
            alt="API Quote Generator"
          />
        </a>
      </div>

      <br />
      <Footer />
    </div>
  );
};

module.exports = WebApps;
