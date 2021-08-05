const React = require("react");
const Link = require("react-router-dom").Link;
const styles = require("../app.css");
/* the main page for the index route of this app */

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showThis: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showThis: !this.state.showThis
    });
    console.log("handled ", this.state.showThis);
  }

  render() {
    return (
      <div className="textAlign">
        <h1 className="text" id="name">
          Paul O'Connell
        </h1>
        <div className="row">
          <Link className="col link border" to="/about">
            About Me
          </Link>

          <Link className="col link border" to="/Contact">
            Contact Me
          </Link>

          <Link className="col link border" to="/">
            Home
          </Link>
        </div>
        <h2 className="textAlign">
          <span className="readable">Full Stack Software Developer</span>
        </h2>
        <br />
        <br />{" "}
      </div>
    );
  }
}
module.exports = Header;
