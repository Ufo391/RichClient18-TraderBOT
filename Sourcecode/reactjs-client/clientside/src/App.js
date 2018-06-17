import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {  
  render() {
    return (   
      <Router> 
        <div className="App">
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </div> 
      </Router>    
    );
  }
}

export default App;
