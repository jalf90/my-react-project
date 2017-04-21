import React from 'react';
import Main from './Main.js';
import Login from './Login.js';
import About from './About.js';
import NotFoundPage from './NotFoundPage.js';

var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var NotFound = Router.NotFound
var Link = require('react-router-component').Link

// Navbar
var Navbar = React.createClass({
  getInitialState: function(){
    return {
        expanded: false
    }
  },
  showOrHide: function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  },
  collapse: function(value) {
    this.setState({ expanded: value})
    if(this.state.expanded === false) {
      var x = document.getElementById("myTopnav");
      x.className = "topnav";
    }
  },

  render: function() {
    return (
      <div id="navbar" onBlur={() => this.collapse(true)}>
        <ul className="topnav" id="myTopnav">
          <li><Link href="/main">Home {this.state.expanded}</Link></li>
          <li><Link href="/news" onClick={() => this.collapse(false)}>News</Link></li>
          <li><Link href="/login" onClick={() => this.collapse(false)}>Login</Link></li>
          <li><Link href="/about" onClick={() => this.collapse(false)}>About</Link></li>
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
        <Location path="/main" handler={Main} />
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
