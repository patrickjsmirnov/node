import React, { Component } from 'react';
import loginStore from '../../../stores/login-store'
import {observer} from "mobx-react"

import StyledLoginForm from '../../styled/Forms/LoginForm'
import Input from '../Input'

@observer
class LoginForm extends Component {
  
  handleChangeEmail(event) {
    loginStore.setEmail(event.target.value)
  }

  handleChangePassword(event) {
    loginStore.setPassword(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    loginStore.login()
  }

  render() {
    return (
      <div>
        <div>
          {loginStore.status}
        </div>
        <StyledLoginForm action="POST" onSubmit={ this.handleSubmit }>
          <Input
            onChange={ this.handleChangeEmail } 
            name="email" 
            type="email" 
            value={ loginStore.email } 
          />
          <Input 
            onChange={ this.handleChangePassword } 
            name="password" 
            type="password" 
            value={ loginStore.password }  
          />
          <input 
            name="button" 
            type="submit" 
            value="login" 
          />
        </StyledLoginForm>
      </div>
    );
  }
}

export default LoginForm;