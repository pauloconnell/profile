const React = require("react");
const Link = require("react-router-dom").Link;

/*    <!-- comment causing error on glitch???
<Link className="link width inlineBlock" id="data" to="/DynamicData">
          <span className="center">
            Dynamic
            <br />
            Data
          </span>
        </Link>


/* the main page for the about route of this app */
const MyWork = function () {
  return (
    <div className="textAlign">
      <div className="gridContainer width90">
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

        <Link className="link width inlineBlock" id="fullStack" to="/fullStack">
          <span className="center">
            Full Stack <br />
            Applications
          </span>
        </Link>

        <Link
          className="link width inlineBlock"
          id="d3"
          to="/DataVisualization2"
        >
          <span className="center">
            Data <br />
            Visualization
          </span>
        </Link>
      </div>
    </div>
  );
};

module.exports = MyWork;
