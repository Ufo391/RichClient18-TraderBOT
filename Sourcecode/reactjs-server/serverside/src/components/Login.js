import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'

const _margin = 150;

const styles = {
  margin: _margin + 'px ' + _margin + 'px ' + _margin + 'px'
}

const id_mail= "textbox_mail";
const id_password= "textbox_password";
const id_autologin= "checkbox_autologin";

class Login extends Component {


  // Konstruktor
  constructor(props) {
    super(props);
    this.state = {

      username: '',
      password: '',
      auto_login: false

    };

    this.handleChange = this.handleChange.bind(this);
    this.run = this.run.bind(this);

  }

  // Hilfsmethoden

  handleChange(event) {

    if(event.target.id === id_mail){
      this.setState({username: "name: " + event.target.value});
    }
    else if(event.target.id === id_password){
      this.setState({password: "pws: " + event.target.value});
    }
    else if(event.target.id === id_autologin){
      this.setState({auto_login: event.target.checked});
    }    
  }

  run(){
    let x = 5;
  }

  // React Methoden

  render() {
    return (
      <div className="Login" style={styles}>
        <form action={this.run}>

          <p><img src={require('../ressources/ICON.png')} alt="Logo" /></p>
          <p><Input id={id_mail} placeholder='E-Mail..' onChange={this.handleChange}/></p>
          <p><Input id={id_password} placeholder='Passwort..' onChange={this.handleChange}/></p>
          <p><div class="ui checkbox">
            <input id={id_autologin} type="checkbox" onClick={this.handleChange}/>
            <label>automatisch anmelden</label>
          </div></p>
          <p><Button type="submit" >Anmelden</Button></p>

        </form>
      </div>
    )
  }
}

export default Login;