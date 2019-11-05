import React from 'react'
import Link from 'next/link'
import styles from './styles/footer.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Footer = () => (
  <footer className={cx('container')}>
    <div className={cx('wrap')}>
      <Link href="/">
        <a className={cx('logo')}>
          <img src="/img/logo.svg" width="80" />
        </a>
      </Link>
    </div>
  </footer>
)

export default Footer
