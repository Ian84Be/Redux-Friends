import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    username: '',
    password: '',
    waiting: false,
    loggedIn: false,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    console.log('login');
    e.preventDefault();
    this.setState({
      waiting: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ReduxFriends</h1>
        {this.state.waiting ? (<div className="waiting">waiting..</div>) : (
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


        
      </div>
    );
  }
}

export default App;
