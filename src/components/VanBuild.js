import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class VanBuild extends Component {

  componentDidMount() {
    this.getVanBuild()
  }

  getVanBuild = (event) => {
    fetch(this.props.baseURL + '/api/users/' + this.props.user_id + '/vanbuild', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
  }

  render() {
    return (
      <div>
        <Link
          to='/'
          refresh='true'
          onClick={ this.props.handleLogOut }>
          Sign Out
        </Link>
        <h2>This is the Van Build Component</h2>
      </div>
    )
  }
}

export default VanBuild
