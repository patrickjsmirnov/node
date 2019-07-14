import {decorate, observable, action} from "mobx"
import {observer} from "mobx-react"

class LoginStore {
    @observable email;
    @observable password;
    @observable status;
    @observable state;
    
    constructor({email, password, status}) {
        this.email = email;
        this.password = password;
        this.status = status;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setSetStatus(status) {
        this.status = status;
    }

    getUser() {
        return {
            user: {
                email: this.email,
                password: this.password
            }
        }
    }

    @action
    login() {
        console.log('login')
        this.state = "pending"
        fetch('http://localhost:3003/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.getUser()),
        })
        .then(response => response.json())
        .then(response => {
            const { user: { token } } = response
            console.log('token = ', token)

            if (token) {
                this.setSetStatus('logged in')
            }
        })
        .catch(error => console.error('Ошибка:', error));
        
    }
}

const loginStore = new LoginStore({status: 'not logged in'});
export default loginStore;
