import React, { Component } from 'react'
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router 
} from 'react-router-dom';
import Home from './Home.js';
import Search from './Search';
import Login from './Login';
import About from './About.js';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/search'>Look around</Link>
        <Link to='/login'>Sign In Here </Link>
        <Link to='/about'>About Us</Link>

        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }

}

