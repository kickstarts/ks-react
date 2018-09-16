import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container } from './styles'

// Config
// import { } from '@config'
// import 'reactotronSetup'

// Commons
// import { } from '@components'

// Helpers
// import {  } from '@lib/helpers'

// Validators
// import {  } from '@lib/validators'

// Redux
// import { } from '@redux'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}

  getDerivatedStateFromProps() {}

  render() {
    return (
      <Container></Container>
    )
  }
}

Main.propTypes = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
