import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateUser extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmitCreateUser = (event) => {
    event.preventDefault()
    const { password, confirmPassword } = this.setState
    if (password !== confirmPassword) {
      alert("Password does not match")
    } else {
      fetch(this.props.baseURL + '/auth/signup', {
        method: 'POST',
        body:
          JSON.stringify({
            email: this.state.email,
            password: this.state.password
          }),
        headers: { 'Content-Type': 'application/json' }
      })
      .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <div>
        <h2>This is the Create User Component</h2>
        <form onSubmit={this.handleSubmitCreateUser}>
          <label>
            <input
              type='email'
              name='email'
              id='email'
              value={this.state.email}
              placeholder='email'
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type='password'
              name='password'
              id='password'
              value={this.state.password}
              placeholder='password'
              onChange={this.handleChange}
            />
          </label>
          <input
            type='submit'
            value='Register'
          />
        </form>
        <Link to='/'>
          Click here to sign in
        </Link>
      </div>
    )
  }
}

export default CreateUser
