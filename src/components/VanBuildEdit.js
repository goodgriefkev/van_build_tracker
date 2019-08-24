import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button,
          Container } from 'reactstrap'

class VanBuildEdit extends Component {
  render() {
    return(
      <>
        <Container fluid>
        <h2>Van Build Editing Under Construction <span role='img'>🚧👷‍♂️🏗</span></h2>
        <Link
          to='/vanbuild'
          refresh='true'>
          <Button>
            Back to Van Build
          </Button>
        </Link>
        </Container>
      </>
    )
  }
}

export default VanBuildEdit
