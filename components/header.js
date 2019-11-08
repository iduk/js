import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

export const isToggle = () => {
  var Menu = document.getElementById(`menuList`)

  if (Menu.style.display == 'block' || '') {
    Menu.style.display = 'none'
  } else {
    Menu.style.display = 'block'
  }
}

const Header = props => {
  return (
    <Fragment>
      <header className={cx('headerNav')}>
        <nav className={cx('container', 'py-2')}>
          {/* logo */}
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a className={cx('brand-logo')}>
              <Image src="/img/symbol.svg" alt="openfloor" />
            </a>
          </Link>

          {/* toggle */}
          <div className={cx('d-block', 'd-lg-none')}>
            <button
              type="button"
              className={cx('menu-toggle')}
              onClick={isToggle}
            >
              <i className={cx('la', 'la-stream')}></i>
            </button>
          </div>

          {/* Menu */}
          <ul
            id="menuList"
            className={cx('menuList', 'd-lg-flex')}
            style={{ display: `none` }}
          >
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href} as={process.env.BACKEND_URL + `${href}`}>
                  <a className={cx('menuLink')}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}
export default Header
