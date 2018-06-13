import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'semantic-ui-react'

class Login extends Component {

    render() {
      return (        
        <div className="Login">
        <img src={ require('../ressources/ICON.png')} alt="Logo" />
          <p>
            <Input placeholder='E-Mail..' />
          </p>
          <p>
            <Input placeholder='Passwort' />
          </p>
          <p>
            <div class="ui checkbox">
              <input name="example" type="checkbox"/>
              <label>automatisch anmelden</label>
            </div>
          </p>

<p/>
<p/>
<p/>
<p/>
<Button>Anmelden</Button>


        </div>                
      )
    }
  }
  
  export default Login;