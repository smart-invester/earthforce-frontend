import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request from 'superagent';

import './header.css';

export default class Header extends Component {
  state = {
    usernameSignIn: '',
    passwordSignIn: '',
  }
  handleSignIn = async () => {
    // making a request to our signin route on our API and checking with the data on our server
    const signIn = await request.post(`https://guarded-lake-55222.herokuapp.com/api/auth/signin`, {
      username: this.state.usernameSignIn,
      password: this.state.passwordSignIn,
    })
    // setting the user object into local storage to so we can navigate to other pages after we log in 
    localStorage.setItem('user', JSON.stringify(signIn.body));
    // this redirects the user after sign in

  }
  render() {
    return (

      <div className="header">
        <img className="logo" src="EF-logo.png" alt="Earth-Force logo" />
        <div className="nav">
          <ul className="nav__links" >
            <li><Link exact to="/">Home </Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/contribute">Contribute</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/relief">Relief</Link></li>
          </ul>
        </div>

        <div id="login">Username: <input value={this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value })} />Password: <input value={this.state.passwordSignIn} type="password" onChange={(e) => this.setState({ passwordSignIn: e.target.value })} /><span><button onClick={this.handleSignIn}>Sign in</button></span>
        </div>

      </div>

    )
  }
}



