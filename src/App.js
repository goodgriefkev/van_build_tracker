import React, { Component } from 'react';
import SignIn from './components/SignIn.js'

import { BASE_URL } from './constants.js'

const baseURL = BASE_URL

class App extends Component {
  render() {
    return (
      <div>
        <h1>Van Build Tracker</h1>
        <SignIn
          baseURL = { baseURL }
        />
      </div>
    )
  }
}

export default App;
