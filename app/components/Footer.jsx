const React = require("react");
const Link = require("react-router-dom").Link;
const styles = require("../app.css");
/* the main page for the index route of this app */

class Footer extends React.Component {
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
      <div>
        <center>
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
  }
}
module.exports = Footer;
