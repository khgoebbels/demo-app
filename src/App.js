import React, { Component } from 'react';
// import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
    authCode: ''
  }
  onChange = (key, e) => { this.setState({ [key]: e.target.value })}
  signUpUser = () => {
    const { username, password, email, phone_number } = this.state
    Auth.signUp({
      username, password, attributes: { email, phone_number }
    })
    .then(success => console.log('successfully signed up user!: ', success))
    .catch(err => console.log('error signing up user: ', err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WOOOOOOOO!!!!!</h1>
        </header>
        <div>
          <input placeholder="username" onChange={e => this.onChange('username', e)} />
          <input placeholder="password" type="password" onChange={e => this.onChange('password', e)} />
          <input placeholder="email" onChange={e => this.onChange('email', e)} />
          <input placeholder="phone_number" onChange={e => this.onChange('phone_number', e)} />
          <button onClick={this.signUpUser}>Create User</button>
        </div>
      </div>
    );
  }
}

//export default withAuthenticator(App);
export default App;
