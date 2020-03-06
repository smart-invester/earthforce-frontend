import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import Search from './Search';
import Relief from './Relief.js';
import Favorites from './Favorites.js';
import About from './About.js';

export default class App extends Component {
  
  state = { user: null };
    setUser = user => {
      this.setState({user: user.body});
    }

  render() {
    return (
      <div>
        <Router>

       <Header />
        
        <Switch>
          
          <Route exact path='/' render={(props) => <Home {...props} setUser={ this.setUser } user={ this.state.user }/>}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/relief' component={Relief} />
          <Route exact path='/your-events' render={(props) => <Favorites {...props} setUser={ this.setUser } user={ this.state.user } />}/>
          <Route exact path='/search' render={(props) => <Search {...props} setUser={ this.setUser } user={ this.state.user }/>} />
        
        </Switch>
      </Router>

      </div>
    )
  }
}

