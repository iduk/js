import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import styles from './styles/layout.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Layout = ({ children }) => (
  <div id={cx('layoutWrap')}>
    <Sidebar />
    <Header />
    <main className={cx('layoutMain')}>{children}</main>
    <Footer />
  </div>
)

export default Layout
