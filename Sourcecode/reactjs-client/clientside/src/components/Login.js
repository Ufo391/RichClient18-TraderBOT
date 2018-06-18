import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import fetch from 'node-fetch';

const _margin = 150;

const styles = {
  margin: _margin + 'px ' + _margin + 'px ' + _margin + 'px'
}

const id_mail = "textbox_mail";
const id_password = "textbox_password";
const id_autologin = "checkbox_autologin";

class Login extends Component {


  // Konstruktor
  constructor(props) {
    super(props);
    this.state = {

      username: '',
      password: '',
      auto_login: false,

    };

    this.handleChange = this.handleChange.bind(this);
    this.request = this.request.bind(this);

  }

  // Hilfsmethoden

  handleChange(event) {

    if (event.target.id === id_mail) {
      this.setState({ username: "name: " + event.target.value });
    }
    else if (event.target.id === id_password) {
      this.setState({ password: "pws: " + event.target.value });
    }
    else if (event.target.id === id_autologin) {
      this.setState({ auto_login: event.target.checked });
    }
  }

  request() {
    
    axios.get('http://localhost:3040/api/info').then(function(response){
     alert(response);
    }).catch(function(error){
      alert(error);
    });
    
    /*
    fetch('http://192.168.102.128:3040/api/info')
      .then(res => res.text())
      .then(body => console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> " + body));
      */
  }

  // React Methoden

  render() {
    return (
      <div className="Login" style={styles}>
        <form>

          <p><img src={require('../ressources/ICON.png')} alt="Logo" /></p>
          <p><Input id={id_mail} placeholder='E-Mail..' onChange={this.handleChange} /></p>
          <p><Input id={id_password} placeholder='Passwort..' type="password" onChange={this.handleChange} /></p>
          <p><div class="ui checkbox">
            <input id={id_autologin} type="checkbox" onClick={this.handleChange} />
            <label>automatisch anmelden</label>
          </div></p>
          <p><Button type="submit" onClick={this.request}>Anmelden</Button></p>

        </form>
      </div>
    )
  }
}

export default Login;