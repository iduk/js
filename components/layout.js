import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import styles from './styles/layout.module.scss'
import theme from './styles/theme.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Layout = ({ children }) => (
  <Fragment>
    <Sidebar />
    <Header />
    <main className={cx('layoutMain')}>{children}</main>
    <Footer />
  </Fragment>
)

export default Layout
