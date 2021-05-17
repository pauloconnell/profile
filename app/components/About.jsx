const React = require('react');
const Link = require('react-router-dom').Link

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <h1>About</h1>

      <p>"Interested in working in any/all parts of the stack where I can write clean code and help build our team and products stronger."</p>

      <Link to='/Contact'>Contact Me</Link><br/>
      <Link to='/'>Profile</Link>
    </div>
  );
}

module.exports = About;