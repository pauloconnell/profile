const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const Contact = function() {
  return (
    <div>
      <h1>Contact</h1>

      <p>
        <button >
      <a target="_blank" href="https://github.com/pauloconnell">       
        GitHub:
        https://github.com/pauloconnell
      </a> 
        </button>
         <button >
      <a target="_blank" href="www.linkedin.com/in/paul-o-connell-604">       
        Linked In:
       www.linkedin.com/in/paul-o-connell-604
      </a> 
        </button>
       
      </p>
      <Link to='/about'>About Me</Link><br/>
      <Link to="/">Profile</Link>
    </div>
  );
};

module.exports = Contact;
