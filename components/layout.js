import React, { Fragment } from "react"
import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

const Layout = (props) => (
  <Fragment>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link
        rel="stylesheet"
        as="style"
        crossOrigin={true}
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
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

    <div id="wrapper" className={`page--${props.theme}`}>
      <header>
        <Header />
      </header>
      <main className="main">{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  </Fragment>
)

export default Layout
