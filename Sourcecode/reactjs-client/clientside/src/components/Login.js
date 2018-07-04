import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
let serverRoutes = require('../util/ServerRoutes');

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

      mail: '',
      password: '',
      auto_login: false,      

    };

    this.handleChange = this.handleChange.bind(this);
    this.request = this.request.bind(this);

  }

  // Hilfsmethoden

  handleChange(event) {

    if (event.target.id === id_mail) {
      this.setState({ mail: event.target.value });
    }
    else if (event.target.id === id_password) {
      this.setState({ password: this.crypt(event.target.value) });
    }
    else if (event.target.id === id_autologin) {
      this.setState({ auto_login: event.target.checked });
    }
  }

  crypt(input) {
    // Verschlüssel die PW eingabe !!!!!111111elllf <<<<<<<<<<<<<<<<<<    
    return input;
  }

  request() {

    if (this.validateInputs() === true) {
      const payload = {

        mail: this.state.mail,
        password: this.state.password,
        auto_login: this.state.auto_login,

      };

      axios.post(serverRoutes.login, JSON.stringify(payload));
    }
    else {
      alert("Bitte prüfen Sie Ihre Eingaben!");
    }

  }

  validateInputs() {
    return this.state.mail.includes("@") && this.state.password.length > 0;
  }

  // React Methoden

  render() {
    return (
      <div className="Login" style={styles}>

        <p><img src={require('../ressources/ICON.png')} alt="Logo" /></p>
        <p><Input id={id_mail} placeholder='E-Mail..' onChange={this.handleChange} /></p>
        <p><Input id={id_password} placeholder='Passwort..' type="password" onChange={this.handleChange} /></p>
        <p><div class="ui checkbox">
          <input id={id_autologin} type="checkbox" onClick={this.handleChange} />
          <label>automatisch anmelden</label>
        </div></p>
        <p><Button onClick={this.request}>Anmelden</Button></p>

      </div>
    )
  }
}

export default Login;