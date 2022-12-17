const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");

const MyWork = require("./links/MyWork");

/* the main page for the index route of this app */
const WebApps = function () {
  return (
    <div className="container-fluid">
      <MyWork />
      <hr></hr>
      <h2 className=" mb-3 textAlign">
        <span className="readEasy title">Web Applications</span>
      </h2>
      <h3 className="mb-5 textAlign">
        <span className="readEasy">
          Modern responsive custom Web Applications <br />
          built using javaScript and React, deployed in the cloud.
        </span>
      </h3>

      <div className="row mx-1">
        <section className="col-12 col-sm-6 ">
          <a
            className="pos-one link align-middle"
            title="Delivers specific information for every item on sales floor and organizes similar models to increase sales conversions"
            href="https://codepen.io/p_ollie/full/qJjVgR"
            target="_blank"
          >
            <div className=" text-align">
              <span className="title inlineBlock text">
                <strong>
                  <u>Test Center</u>
                  <div>Product Knowledge App</div>
                </strong>
              </span>
            </div>
            <div className="align-middle mt-1 mt-md-3 mt-lg-5">
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png"
              />
            </div>
          </a>
        </section>

        <section className="col-12 col-sm-6  ">
          <a
            className="pos-two link align-middle"
            href="https://ianbunburydogschool.glitch.me"
            target="_blank"
          >
            <div className=" text-align">
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
                className="responsive mt-2 mt-md-0"
                src="https://res.cloudinary.com/pollie/image/upload/v1615410052/profileBunbury_pcfb8t.png"
                alt="Ian Bunbury Dog School"
              />
            </div>
          </a>
        </section>
      </div>

      <div className="row mx-1">
        <section className="col-12 col-sm-6 ">
          <a
            className="pos-one link align-middle"
            title="Profile developed with pure HTML and CSS"
            href="https://codepen.io/p_ollie/full/ayJXyZ"
            target="_blank"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>Web Developer Profile </strong>
              </span>
            </div>
            <img
              className="responsive  mt-md-3 "
              src="https://res.cloudinary.com/pollie/image/upload/v1631908054/profile_v31u4b.png"
              alt="Web Developer"
            />
          </a>
        </section>
        <section className="col-12 col-sm-6 ">
          <a
            className="pos-two link align-middle"
            href="https://codepen.io/p_ollie/full/VMVeQw"
            target="_blank"
          >
            <div className="text-align">
              <span className="title text inlineBlock">
                <strong>Wiki Search via API</strong>
              </span>
            </div>

            <img
              className="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1598909611/Wiki_search_avfb5n.png"
              alt="wiki search"
            />
          </a>
        </section>
      </div>

      <div className="row mx-1">
        <section className="col-12 col-sm-6">
          <a
            className="pos-one link align-middle"
            title="Detects GeoLocation then hits weather forcast API to display weather in your area"
            href="https://codepen.io/p_ollie/full/QqGGXB"
            target="_blank"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>API Local Weather Detector</strong>
              </span>
            </div>
            <img
              className="responsive mt-1"
              src="https://res.cloudinary.com/pollie/image/upload/v1616001698/weather_f6qfif.png"
              alt="API Weather detector"
            />
          </a>
        </section>
        <section className="col-12 col-sm-6 ">
          <a
            className="pos-two link align-middle"
            href="https://codepen.io/p_ollie/full/ZEzNJWo"
            target="_blank"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>React Drum Machine</strong>
              </span>
            </div>
            <img
              className="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1590166330/Drum_Machien_ithb8w.jpg"
              alt="Drum Machine img loading"
            />
          </a>
        </section>
      </div>

      <div className="row mx-1">
        <section className="col-12 col-sm-6 ">
          <a
            className="pos-one link align-middle"
            href="https://cdpn.io/p_ollie/debug/xyRRyq/yPAJjKXXWKQA"
            target="_blank"
          >
            <div className="text-align">
              <span className="title text inlineBlock">
                <strong>Tic Tac Toe with AI Player</strong>
              </span>
            </div>
            <img
              className="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1590523056/ticTacToe_gduhcm.jpg"
              alt="tic-tac-toe game"
            />
          </a>
        </section>
        <section className="col-12 col-sm-6">
          <a
            className="pos-two link align-middle"
            href="https://codepen.io/p_ollie/full/RLrxPr"
            target="_blank"
          >
            <div className="mt-3 text-align">
              <span className="title text inlineBlock">
                <strong>
                  <u>API Quote Generator</u>
                </strong>
                <br />
              </span>
            </div>
            <br />
            <img
              className="responsive"
              src="https://res.cloudinary.com/pollie/image/upload/v1598905735/API_quote_machien_cmbxot.png"
              alt="API Quote Generator"
            />
          </a>
        </section>
      </div>
      <MyWork />
    </div>
  );
};

module.exports = WebApps;
