import React, { Fragment, useState } from "react"
import ActiveLink from "./ActiveLink"
import Link from "next/link"
import "./styles/app.scss"

const MenuLink = (props) => (
  <li>
    <ActiveLink
      href={`${process.env.BACKEND_URL}/${props.id}`}
      activeClassName="active"
      className="menuLink"
    >
      {props.id}
    </ActiveLink>
  </li>
)

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Fragment>
      <header className="headerNav">
        <nav className="container">
          {/* logo */}
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a className="brand-logo">
              <img src={props.src} alt="Openfloor Logo" className="img-fluid" />
            </a>
          </Link>

          {/* toggle */}
          <button
            onClick={toggleNavbar}
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            className="navbar-toggler d-inline-block d-lg-none m-0 menu-toggle"
          >
            <i className="la"></i>
          </button>

          {/* Menu */}
          <div
            id="navbar"
            // role="dialog"
            className="menuList collapse d-lg-flex"
          >
            <ul>
              <MenuLink id="Experience" />
              <MenuLink id="Projects" />
              <MenuLink id="Contact" />
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header
