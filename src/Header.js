import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Home.css';
import request from 'superagent';
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
        // this.props.history.push('/');
    }
    render() {
        return (
        <div className="header">
        <nav>
      <Link exact to="/">
        Home
      </Link>
      <Link to="/contribute">
        Contribute
      </Link>
      <Link to="/favorites">
        Favorites
      </Link>
    
      <Link to="/about">
        About
      </Link>
      <Link to="/search">
        Search
      </Link>
      </nav>
      <div className="login">Username
                <input value={ this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value})} />
                Password
                <input value={ this.state.passwordSignIn} onChange={(e) => this.setState({ passwordSignIn: e.target.value})} />
                <button className="loginbtn" onClick={this.handleSignIn}>Sign in</button>
            </div>
    </div>
        )
    }
}

