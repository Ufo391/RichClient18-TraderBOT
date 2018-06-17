import React, { Component } from 'react';

const _margin = 150;

const styles = {
  margin: _margin + 'px ' + _margin + 'px ' + _margin + 'px'
}

class Home extends Component {


  // Konstruktor
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  // Hilfsmethoden


  // React Methoden

  render() {
    return (
      <div className="Home" style={styles}>
        <h1>Willkommen Benutzer</h1>
      </div>
    )
  }
}

export default Home;