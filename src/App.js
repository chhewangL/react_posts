import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';

import Login from './auth/Login';
import Logout from './auth/Logout';
import about from './components/about';
import home from './components/home'


import Header from './components/layout/Header'

export default class App extends Component {
render() {
  
    
    return (
      <Router>
        
      <div className="App">
        <Header />
        <Route exact path="/" component={Login} />
        <Route  path="/home" component={home} />
        <Route path="/about" component={about} />
        <Route path ="/logout" component={Logout} />
        

      </div>
      </Router>
    )
  }
}


