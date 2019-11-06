import React from 'react'
import Link from 'next/link'
import styles from './styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Footer = () => (
  <footer className={cx('footer')}>
    <div className={cx('wrap')}>
      <p className={cx('copyright')}>
        <strong>Openfloor</strong> <br />
        Beautiful, projects gifted by the world’s most generous of perfact
        teams.
        <br />
        @Create by. iduk
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
