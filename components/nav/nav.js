import React from 'react'
import Link from 'next/link'
import style from './nav.module.scss'

const links = [
  { href: './page1', label: 'page1' },
  { href: './page2', label: 'page2' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className={style.nav}>
    <ul className={style.navList}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
