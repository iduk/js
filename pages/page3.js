import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

class Page3 extends React.Component {
  render() {
    return (
      <Layout>
        <p>? ??? ????</p>
        <Link href="/">
          <a className="btn btn-light">Go back home</a>
        </Link>
      </Layout>
    )
  }
}
export default Page3
