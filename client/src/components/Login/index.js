import React, { Component } from 'react';
import loginStore from '../../stores/login-store'
import {observer} from "mobx-react"

@observer
class Login extends Component {
  
  handleChangeEmail(event) {
    loginStore.setEmail(event.target.value)
  }

  handleChangePassword(event) {
    loginStore.setPassword(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit')
    loginStore.login()
  }

  render() {
    return (
      <div>
        <div>
          {loginStore.status}
        </div>
        <form action="POST" onSubmit={ this.handleSubmit }>
          <input 
            onChange={ this.handleChangeEmail } 
            name="email" 
            type="email" 
            value={ loginStore.email } 
          />
          <input 
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
        </form>
      </div>
    );
  }
}

export default Login;