import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmitLogIn = (event) => {
    event.preventDefault()
    // console.log('log in submitted')
    // console.log(this.state)
    // console.log(this.props.baseURL)
    fetch(this.props.baseURL + '/auth/login', {
      method: 'POST',
      body:
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        if (json.user) {
          this.setState({
            email: '',
            password: '',
            credentialError: false
          })
          this.props.handleSetUser(json.user)
        } else {
          this.setState({
            password: '',
            credentialError: true
          })
        }
      })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        {
          this.state.credentialError ?
          <h2>Username or Password Incorrect</h2> :
          null
        }
        <form onSubmit={this.handleSubmitLogIn}>
          <label>
            <input
              type='text'
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
            value='Sign In'
          />
        </form>
        <Link to='/signup'>
          Click here to sign up!
        </Link>
      </div>
    )
  }
}

export default SignIn
