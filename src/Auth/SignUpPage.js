import React, { Component } from 'react'
import { signUpUser } from '../api-utils.js'
export default class SignUpPage extends Component {
  state = {
    email: '',
    password: ''
  }

  handleEmail = (e) => this.setState({ email: e.target.value})

  handlePassword = (e) => this.setState({ password: e.target.value})

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = await signUpUser(this.state.email, this.state.password);
    
    this.props.handleUserChange(user);
    this.props.history.push('./todos');
  }

  render() {
    return (
      <div>
        <h2>Signup Page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input value={this.state.email} onChange={this.handleEmail} />
          </label>
          <label>
            password:
            <input value={this.state.password} onChange={this.handlePassword} />
          </label>
          <button>Create</button>
        </form>
      </div>
    )
  }
}
