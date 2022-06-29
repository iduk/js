import React, { Fragment } from "react"
import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
// import Sidebar from './sidebar'
import "./styles/app.scss"

const Layout = (props) => (
  <Fragment>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
        rel="stylesheet"
      />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link href="/css/line-awesome.min.css" rel="stylesheet" />
      <link href="/css/animate.min.css" rel="stylesheet" />
      <link href="/css/jquery.fancybox.min.css" rel="stylesheet" />

      <title>{props.title}</title>

      <meta charSet="utf-8" />
    </Head>

    <div id="wrap" className={`${props.theme}` + ` ${props.color}`}>
      {/* <Sidebar theme="bg-dark" /> */}
      <Header src={props.logo} />

      <main className="main">
        {props.children}
        <Footer />
      </main>
    </div>
  </Fragment>
)

export default Layout
