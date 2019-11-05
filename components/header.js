import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
    <header className={cx('nav')}>
      <Link href="/">
        <a className={cx('logo')}>
          <Image src="/img/symbol.svg" width="80" alt="openfloor" />
          adsfadf
        </a>
      </Link>
      <ul className={cx('navList')}>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  </Fragment>
)

export default Header
