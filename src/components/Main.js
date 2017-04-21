import React from 'react';
import wallpaper from '../assets/work-in-progress.png';

// Container
var Main = React.createClass({
  render: function() {
    return (
      <div className="home">
        <img src={wallpaper} alt="Working on this"/>
      </div>
    );
  }
});

export default Main;
