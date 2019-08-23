import React, { Component } from 'react'
import CreateUser from './components/CreateUser.js'
import SignIn from './components/SignIn.js'
import VanBuild from './components/VanBuild.js'

import { BASE_URL } from './constants.js'

const baseURL = BASE_URL

class App extends Component {
  render() {
    return (
      <div>
        <h1>Van Build Tracker</h1>
        <CreateUser
          baseURL = { baseURL }
        />
        <SignIn
          baseURL = { baseURL }
        />
        <VanBuild />
      </div>
    )
  }
}

export default App;
