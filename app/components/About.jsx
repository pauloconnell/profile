const React = require('react');
const Link = require('react-router-dom').Link

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <h1 id="name">Paul O'Connell</h1>
        <h2>Full Stack Software Developer</h2>
      <h1>About</h1>

      <p class="text">"Interested in working in any/all parts of the stack where I can write clean code and help build our team and products stronger."</p>

      <Link to='/Contact'>Contact Me</Link><br/>
      <Link to='/'>Profile</Link>
    </div>
  );
}

module.exports = About;