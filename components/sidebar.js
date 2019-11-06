import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from './styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const links = [
  { href: '/', img: '/img/icons-dashboard.svg' },
  { href: '/', img: '/img/icons-laptop.svg' },
  { href: '/', img: '/img/icons-folder.svg' },
  { href: '/', img: '/img/icons-email.svg' },
  { href: '/', img: '/img/icons-location.svg' },
].map(link => {
  link.key = `sidebar-link-${link.href}-${link.img}`
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
