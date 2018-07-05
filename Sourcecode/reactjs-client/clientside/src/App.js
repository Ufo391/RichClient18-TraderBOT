import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  // Konstruktor
  constructor(props) {
    super(props);
    this.state = {

      viewState: -1,
      VIEWS_ENUM: { LOGIN_STATE: 0, REGISTER_STATE: 1, HOME_STATE: 2 }

    };

    this.state.viewState = this.state.VIEWS_ENUM.LOGIN_STATE;

  }

  render() {

/*
    switch (this.state.viewState) {
      case this.state.VIEWS_ENUM.HOME:
        return ({ Home });
      case this.state.VIEWS_ENUM.LOGIN:
        return ({ Login });
      case this.state.VIEWS_ENUM.REGISTER:
        return ({ Register });
      default:
        break;
    }
    */

    var x = 5
    if(x === 0){return (<Eins/>);}
    else{return (<Zwei/>);}
    /*
        return (
    
          <Router>
            <div className="App">
              <Route exact path='/' component={Login} />
              <Route path='/home' component={Home} />
              <Route path='/register' component={Register} />
            </div>
          </Router>
    
        );
        */
  }
}

class Eins extends React.Component {
  render() {
     return (
        <div>
           <h1>1</h1>
        </div>
     );
  }
}

class Zwei extends React.Component {
  render() {
     return (
        <div>
           <h1>2</h1>
        </div>
     );
  }
}

export default App;
