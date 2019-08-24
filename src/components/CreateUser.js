import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container,
          Button} from 'reactstrap'

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
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <>
      <Container fluid>
      <div>
        <h2>Create an Account</h2>
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
          <Button type='button'>
            Click here to sign in
          </Button>
        </Link>
      </div>
      </Container>
      </>
    )
  }
}

export default CreateUser
