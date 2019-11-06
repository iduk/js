import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import styles from './styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Layout = props => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Gothic+A1:300,400,700&display=swap"
      />
      <title>{props.title}</title>
    </Head>

    <div id={'wrap'}>
      <Sidebar />
      <Header />
      <main className={cx('main', `${props.colors}`)}>
        {props.children}
        <Footer />
      </main>
    </div>
  </Fragment>
)

export default Layout
