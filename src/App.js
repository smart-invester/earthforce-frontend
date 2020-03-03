import React, { Component } from 'react'
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router,
  Redirect, 
} from 'react-router-dom';
import Search from './Search';
import Login from './Login';
import './App.css';
import GoogleMap from './GoogleMap';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to='/search/cool'>Look around</Link>
        <Link to='/login'>Sign In Here </Link>
        <Link to='/map'>Looking for disasters! </Link>
        
        <Switch>
          <Route exact path='/search/cool' component={Search} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/map' component={GoogleMap} />
        </Switch>
      

      </Router>
    )
  }

}

