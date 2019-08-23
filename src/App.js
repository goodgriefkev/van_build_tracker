import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import CreateUser from './components/CreateUser.js'
import SignIn from './components/SignIn.js'
import VanBuild from './components/VanBuild.js'

import { BASE_URL } from './constants.js'

const baseURL = BASE_URL

class App extends Component {

  state = {
    loggedIn: false,
    user_id: undefined
  }

  toggleLoggedIn = () => {
    console.log("toggleLoggedIn ran")
    this.setState({
      loggedIn: !this.state.loggedIn
    })
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
                <Redirect to="/vanbuild"/>
              ) : (
              <SignIn
                baseURL = { baseURL }
                toggleLoggedIn = { this.toggleLoggedIn }
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
              <VanBuild
                baseURL = { baseURL }
                user_id = { this.state.user_id }
              />
            )}
          />

        </div>
      </Router>
    )
  }
}

export default App;
