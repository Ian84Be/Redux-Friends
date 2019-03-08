import React, { Component } from 'react';
import {connect} from 'react-redux';

import Loader from 'react-loader-spinner';
import {loginFetch} from "./actions";

import './App.css';

class App extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.loginFetch(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>ReduxFriends</h1>

        {this.state.waiting ? (<Loader type="Rings" color="palevioletred" width="33"/>) : (
          <form onSubmit={this.handleLogin}>
          <input type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="username"
            value={this.state.username}
            required/>

            <input type="text"
            name="password"
            onChange={this.handleChange}
            placeholder="password"
            value={this.state.password}
            required/>

            <input type="submit"/>
        </form>
        )}

        {this.props.error !== '' && ( <div className="error-text">{this.props.error}</div> )}

        {this.props.loggedIn && ( <div className="login-page">LOGIN_SUCCESS</div> )}
        
      </div>
    );
  }
}

const mstp = state => ({
  error: state.error,
  loggedIn: state.loggedIn,
  waiting: state.waiting,
});

export default connect(mstp,{loginFetch})(App);
