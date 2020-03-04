import React, { Component } from 'react'
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router } from 'react-router-dom';

import Search from './Search';
// import Login from './Login';
import GoogleMap from './GoogleMap';
import Header from './Header';
import Home from './Home';

import './App.css';



export default class App extends Component {
  render() {



    return (

      <Router>
        <Header>
        <div id="nav">
        <Link to='/search/cool'>Look around</Link>
        <Link to='/login'>Sign In </Link>
        <Link to='/map'>Look for Disasters! </Link>
        <Link t0='/home'>Home</Link>
        </div>
        </Header>


        <Switch>
          <Route path='/' component={Home} />
          <Route exact path='/search/cool' component={Search} />
          {/* <Route exact path='/login' component={Login} /> */}
          <Route exact path='/map' component={GoogleMap} />
        </Switch>


      </Router>
    )
  }
}

