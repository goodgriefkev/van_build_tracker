import React, { Component } from 'react'

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
    console.log('log in submitted')
    console.log(this.state)
    console.log(this.props.baseURL)
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
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
      </div>
    )
  }
}

export default SignIn
