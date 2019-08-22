import React, { Component } from 'react'

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form>
          <label>
            <input
              type='text'
              name='email'
              id='email'
              value={this.state.email}
              placeholder='email'
            />
          </label>
          <label>
            <input
              type='password'
              name='password'
              id='password'
              value={this.state.password}
              placeholder='password'
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
