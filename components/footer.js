import React from 'react'
import Link from 'next/link'
import styles from './styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Footer = () => (
  <footer className={cx('footer')} style={{ marginTop: '2.5rem' }}>
    <div className={cx('wrap')}>
      <p className={cx('copyright')}>
        <strong>Openfloor, Inc.</strong> <br />
        Beautiful, projects gifted by the world’s most generous of perfact
        teams.
        <br />
        <span className={cx('text-muted')}>@Create by. iduk</span>
      </p>
      <Link href="/">
        <a className={cx('logo', 'mt-2')}>
          <img src="/img/symbol.svg" />
        </a>
      </Link>
    </div>
  </footer>
)

export default Footer
