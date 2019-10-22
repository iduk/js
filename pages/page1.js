import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav/nav'

const page1 = () => (
  <main>
    <Head>
      <title>Page1</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <h1>page1</h1>
  </main>
)

export default page1
