import React, { Fragment } from "react"
import Link from "next/link"
import "./styles/app.scss"

const links = [
  { href: "/", img: "/img/icons-dashboard.svg" },
  { href: "/", img: "/img/icons-laptop.svg" },
  { href: "/", img: "/img/icons-folder.svg" },
  { href: "/", img: "/img/icons-email.svg" },
  { href: "/", img: "/img/icons-location.svg" },
].map((link) => {
  link.key = `sidebar-link-${link.href}-${link.img}`
  return link
})

const Sidebar = (props) => (
  <Fragment>
    <aside className={`${props.theme}` + " sideNav shadow-lg"}>
      <ul>
        {links.map(({ key, href, img }) => (
          <li key={key}>
            <a href={href} className="sidebar-icons">
              <img src={img} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  </Fragment>
)

export default Sidebar
