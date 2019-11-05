import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from './styles/sidebar.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const links = [
  { href: './page1', img: '/img/icons-dashboard.svg' },
  { href: './page2', img: '/img/icons-laptop.svg' },
  { href: './page3', img: '/img/icons-folder.svg' },
  { href: './page3', img: '/img/icons-email.svg' },
  { href: './page3', img: '/img/icons-location.svg' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.img}`
  return link
})

const Sidebar = props => (
  <Fragment>
    <aside className={cx('sideNav')}>
      <ul>
        {links.map(({ key, href, img }) => (
          <li key={key}>
            <Link href={href}>
              <a className={cx('sidebar-icons')}>
                <img src={img} alt="" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  </Fragment>
)

export default Sidebar
