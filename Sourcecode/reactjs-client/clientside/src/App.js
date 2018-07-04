import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {  
  render() {
    return (   
      <Router> 
        <div className="App">
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/register' component={Register}/>
        </div> 
      </Router>    
    );
  }
}

export default App;
