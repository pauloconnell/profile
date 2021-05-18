const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");

const dependenciesArray = [
  "express - middleware for the node server",
  "react - for generating the views of the app",
  "react-dom - powers the rendering of elements to the DOM, typically paired with React",
  "webpack - for bundling all the javascript",
  "webpack-cli - command line support for webpack",
  "jsx-loader - allows webpack to load jsx files",
  "react-router-dom - handles routing!"
];

const componentsMade = [
  "Profile- which is the view you are seeing now",
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
  'About - text content to show when "about" route is accessed'
];

/* the main page for the index route of this app */
const DataVisualization = function() {
  return (
    <div>
       <h1 id="name">Paul O'Connell</h1>
      <h1>Data Visualizations using D3</h1>
      <Link to="/about">About Me</Link>
      <br />
      <Link to="/Contact">Contact Me</Link>
      <br />
      <Link to="/">Profile</Link>
      <br />

      <div class="row sectionTitle" >Data Visualization with D3</div><br/>
<div class="row containProjects" >  
  <div class="col-xs-6 project-tile left" > 
    <a href="https://d3-challenge-4.pauloconnell.repl.co/" target="_blank"> 
    <h1><strong>Data Visualization with D3
    </strong></h1> <br/>                                              
    <img src="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png" alt="D3 Data Visualization"/>
    <br/><br/><br/><br/>
    </a>
  </div> 
    
  <div class="col-xs-6 project-tile" class="right" > 
    <a href="https://d3-Challenge-3.pauloconnell.repl.co" target="_blank"> 
    <h1><strong>Data Visualization with D3
    </strong></h1> <br/>                                              
    <img src="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png" alt="D3 Data Visualization"/><br/><br/><br/><br/>
    </a>
  </div>
      </div>

      

      

      <p></p>

    </div>
  );
};

module.exports = DataVisualization;
