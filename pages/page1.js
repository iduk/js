import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav/nav'

class Page1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 2000)
  }
  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  render() {
    if (!this.state.loaded) return null
    return (
      <div>
        <Nav />
        <h1>Page1</h1>
        <p>
          Notice how a loading spinner showed up while my content was "loading"?
          Pretty neat, huh?
        </p>
        <Link href="/">
          <a className="btn btn-light">Go back home</a>
        </Link>
      </div>
    )
  }
}

Page1.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Page1.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

export default Page1
