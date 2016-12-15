import React from 'react';
import Main from './components/Main.js';
import Login from './components/Login.js';
import About from './components/About.js';
import NotFoundPage from './components/NotFoundPage.js';

var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var NotFound = Router.NotFound
var Link = require('react-router-component').Link

// Navbar
var Navbar = React.createClass({
  showOrHide: function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  },

  render: function() {
    return (
      <div id="navbar">
        <ul className="topnav" id="myTopnav">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className="icon">
            <a href="javascript:void(0)" onClick={this.showOrHide}> &#9776; </a>
          </li>
        </ul>
      </div>
    )
  }
})

var Content = React.createClass({

  render: function() {
    return (
      <Locations>
        <Location path="/" handler={Main} />
        <Location path="/login" handler={Login} />
        <Location path="/about" handler={About} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    )
  }
})

var App = React.createClass({

  render: function() {
    return (
      <div>
        <header>
          <Navbar/>
        </header>
        <Content />
      </div>
    )
  }
})

export default App;
