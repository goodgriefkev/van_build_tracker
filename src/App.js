import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import CreateUser from './components/CreateUser.js'
import SignIn from './components/SignIn.js'
import VanBuild from './components/VanBuild.js'

import { BASE_URL } from './constants.js'

const baseURL = BASE_URL

const currentUser = sessionStorage.getItem('currentUser')

class App extends Component {

  state = {
    loggedIn: false,
    user_id: undefined
  }

  componentDidMount = () => {
    this.getCurrentUser()
  }

  handleSetUser = (user) => {
    console.log("handleSetUser ran")
    console.log('user', user)
    this.setState({
      loggedIn: true,
      user_id: user
    })
  }

  getCurrentUser = () => {
    if (currentUser) {
      this.handleSetUser(currentUser)
    } else {
      this.setState({
        loggedIn: false,
        user_id: undefined
      })
    }
  }

  handleLogOut = () => {
    console.log("handleLogOut ran")
    sessionStorage.removeItem('currentUser')
    fetch(baseURL + '/auth/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then(this.setState({loggedIn: false, user_id: undefined}))
  }

  render() {
    const loggedIn = this.state.loggedIn
    return (
      <Router>
        <div>
          <h1>Van Build Tracker</h1>

          <Route exact
            path='/'
            render={(routeProps) => (
              loggedIn ? (
                <Redirect to='/vanbuild' />
              ) : (
                  <SignIn
                    baseURL = { baseURL }
                    handleSetUser = { this.handleSetUser }
                  />
                )
            )}
          />

          <Route
            path='/signup'
            render={(routeProps) => (
              <CreateUser
                baseURL = { baseURL }
              />
            )}
          />

          <Route
            path='/vanbuild'
            render={(routeProps) => (
              loggedIn ? (
                <VanBuild
                  baseURL = { baseURL }
                  user_id = { this.state.user_id }
                  handleLogOut = { this.handleLogOut }
                />
              ) : (
                    <Redirect to='/' />
                  )
            )}
          />

        </div>
      </Router>
    )
  }
}

export default App;
