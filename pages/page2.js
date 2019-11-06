import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'

class Page2 extends React.Component {
  render() {
    return (
      <Layout title="Page2">
        <h1>Page2</h1>
        <p>
          Notice how a loading spinner showed up while my content was "loading"?
          Pretty neat, huh?
        </p>
        <Link href="/">
          <a className="btn btn-light">Go back home</a>
        </Link>
      </Layout>
    )
  }
}
export default Page2
