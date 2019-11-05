import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from './Link'
import Image from './image'
import styles from './styles/header.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const links = [
  { href: './page1', label: 'page1' },
  { href: './page2', label: 'page2' },
  { href: './page3', label: 'page3' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Header = props => (
  <Fragment>
    <Head>
      <title>{props.title}</title>
    </Head>

    <div className={'container'}>asdf</div>
    <header className={cx('nav')}>
      {/* logo */}
      <Link href="/" as="/">
        <a className={cx('logo')}>
          <Image src="/img/symbol.svg" alt="openfloor" />
        </a>
      </Link>

      {/* menu */}
      <ul className={cx('navList')}>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link activeClassName="active" href={href}>
              <a className={cx('navLink')}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  </Fragment>
)

export default Header
