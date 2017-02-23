import React from 'react'
//import {FaUser, FaAsterisk} from 'react-icons/lib/fa'

var Login = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    }
  },
  handleChange: function(e) {
    this.setState({ username: e.target.value })
  },
  changePassword: function(e) {
    this.setState({ password: e.target.value })
  },
  render: function() {
    return (
      <div className="login">
        <div className="login-box">
          <form className="login-form">
            <div className="input-group">
              <input type="text" placeholder="Username" onChange={this.handleChange}/>
              //<FaUser className="icon-position"/>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" onChange={this.changePassword}/>
              //<FaAsterisk className="icon-position"/>
            </div>
            <button className="button-primary btn-login" type="button">Login</button>
          </form>
        </div>
      </div>
    )
  }
})

export default Login;
