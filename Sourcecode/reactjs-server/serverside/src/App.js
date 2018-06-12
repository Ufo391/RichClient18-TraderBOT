import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {


  
  render() {
    return (    
      <div className="App">
          <Container>
    <Header as='h1'>Hello world!</Header>

    <Button
      content='Discover docs'
      href='https://react.semantic-ui.com'
      icon='github'
      labelPosition='left'
    />
</Container>
      </div>
     
    );
  }
}

export default App;
