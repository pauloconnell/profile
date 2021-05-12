const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const Profile = require('./components/Profile');
const About = require('./components/About');
const Contact= require('./components/Contact');

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Profile}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </BrowserRouter>), document.getElementById('main'));