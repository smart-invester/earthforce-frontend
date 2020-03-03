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


export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to='/search/cool'>Look around</Link>
        <Link to='/login'>Sign In Here </Link>
        
        <Switch>
          <Route exact path='/search/cool' component={Search} />
          <Route exact path='/login' component={Login} />
        </Switch>
      

      </Router>
    )
  }
}

