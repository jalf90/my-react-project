import React from 'react';

// Container
var Main = React.createClass({
  render: function() {
    return (
      <div className="home">
        <img src={require('../assets/work-in-progress.png')} alt="Working on this"/>
      </div>
    );
  }
});

export default Main;