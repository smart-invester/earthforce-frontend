import React, { Component } from 'react'
import { 
  Route, 
  Switch,
  BrowserRouter as Router 
} from 'react-router-dom';

import Home from './Home.js';
import Search from './Search';
import Login from './Login';
import About from './About.js';
import Header from './Header.js';
import Relief from './Relief.js';


export default class App extends Component {
  render() {
    return (
      <div>
      <Router>

       <Header />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/relief' component={Relief} />
        </Switch>
      </Router>
      </div>
    )
  }
}

