import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser.js'
import SignIn from './components/SignIn.js'
import VanBuild from './components/VanBuild.js'

import { BASE_URL } from './constants.js'

const baseURL = BASE_URL

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Van Build Tracker</h1>

          <Route exact
            path='/'
            render={(routeProps) => (
              <SignIn
                baseURL = { baseURL }
              />
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
              <VanBuild />
            )}
          />
          
        </div>
      </Router>
    )
  }
}

export default App;
