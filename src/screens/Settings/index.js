import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container } from './styles'

// import { } from '@redux/main'

class Settings extends Component {
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

Settings.propTypes = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings)
