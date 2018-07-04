import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from "react-router-dom";

var error = require('../util/ErrorCodes');
var qs = require('qs');

let serverRoutes = require('../util/ServerRoutes');
var md5 = require('md5');

const _margin = 150;

const styles = {
  margin: _margin + 'px ' + _margin + 'px ' + _margin + 'px'
}

const id_mail = "textbox_mail";
const id_password = "textbox_password";
const id_password_confirm = "textbox_password_confirm";

class Register extends Component {


  // Konstruktor
  constructor(props) {
    super(props);
    this.state = {

      mail: '',
      password: '',
      password_confirm: '',

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
    else if (event.target.id === id_password_confirm) {
      this.setState({ password_confirm: this.crypt(event.target.value) });
    }
  }

  crypt(input) {
    return md5(input);
  }

  request() {

    if (this.validateInputs() === true) {
      const payload = {

        mail: this.state.mail,
        password: this.state.password,

      };

      axios.post(serverRoutes.register, qs.stringify(payload)).then(function (response) {

        let _json = JSON.parse(JSON.stringify(response.data));

        // Handler
        if (_json.status === error.Keys.SUCCESS) {
          this.props.history.push('/') // HIER WEITER MACHEN !!!! Das linken nach erfolgreichen registrieren auf die Home seite ---> https://tylermcginnis.com/react-router-programmatically-navigate/
          // Den algorithmischen Eintrag in die Datenbank implementieren 
        }
        else if (_json.status === error.Keys.USER_ALLREADY_REGISTRED) {
          alert(error.Map.get(error.Keys.USER_ALLREADY_REGISTRED));
        }
        else {
          alert("FEHLER: Unbekannter Status --> " + _json.status);
        }


      }).catch(function (error) {
        alert("asdasdas" + error);
      });
    }
    else {
      alert("Bitte prüfen Sie Ihre Eingaben!");
    }

  }

  validateInputs() {
    return this.state.mail.includes("@") && this.state.password.length > 0 && this.state.password === this.state.password_confirm;
  }

  // React Methoden

  render() {
    return (
      <div className="Login" style={styles}>

        <p><img src={require('../ressources/ICON.png')} alt="Logo" /></p>
        <p><Input id={id_mail} placeholder='E-Mail..' onChange={this.handleChange} /></p>
        <p><Input id={id_password} placeholder='Passwort..' type="password" onChange={this.handleChange} /></p>
        <p><Input id={id_password_confirm} placeholder='Passwort bestätigen..' type="password" onChange={this.handleChange} /></p>
        <p><Button onClick={this.request}>Registrieren</Button></p>
        <Link to="/">Anmeldung</Link>


      </div>
    )
  }
}

export default Register;