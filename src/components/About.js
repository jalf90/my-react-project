import React from 'react';

var About = React.createClass({
  render: function() {
    return (
      <div className="about">
        <img className="profile" src={require('../assets/me.png')} alt="João Ferreira"/>
        <label className="name">João André Ferreira</label>
        <label className="position">Front-end developer</label>
        <label>Portugal</label>
        <a href="https://ch.linkedin.com/in/joão-ferreira-420a0541"> <img className="icon" src={require('../assets/linkedin-512.png')} alt="GitHub"/> LinkedIn</a>
        <a href="https://github.com/jalf90"><img className="icon" src={require('../assets/github-512.png')} alt="GitHub"/> GitHub </a>
      </div>
    )
  }
})

export default About;
