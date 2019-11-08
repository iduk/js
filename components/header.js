import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from './image'
import styles from './styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const links = [
  { href: './', label: 'Index' },
  { href: './page1', label: 'page1' },
  { href: './page2', label: 'page2' },
  { href: './page3', label: 'page3' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Header = props => (
  <>
    <Fragment>
      <header className={cx('headerMenu')}>
        <nav className={cx('container', 'py-2')}>
          {/* logo */}
          <Link href="/" as="/">
            <a className={cx('brand-logo')}>
              <Image src="/img/symbol.svg" alt="openfloor" />
            </a>
          </Link>

          {/* menu toggle */}
          <div className={cx('d-block', 'd-lg-none')}>
            <a href="#" className={cx('menu-toggle')}>
              <i className={cx('la', 'la-stream')}></i>
            </a>
          </div>
          {/* headerMenu */}
          <ul className={cx('menuList', 'd-none', 'd-lg-flex')}>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href} as={href}>
                  <a className={cx('menuLink')}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  </>
)
export default Header
