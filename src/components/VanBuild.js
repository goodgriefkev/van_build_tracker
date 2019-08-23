import React, { Component } from 'react'

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
        <h2>This is the Van Build Component</h2>

      </div>
    )
  }
}

export default VanBuild
