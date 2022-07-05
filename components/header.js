import React, { Fragment, useState, useEffect, useCallback } from "react"
import ActiveLink from "./ActiveLink"
import Link from "next/link"
import { useRouter } from "next/router"
import "./styles/app.scss"
import Sidebar from "./sidebar"

const menulist = [
  { pathname: "WORK" },
  { pathname: "DEV" },
  // { pathname: "contact" },
]

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  // 스크롤시로고팽그르
  const handleScrollEf = useCallback((e) => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    )
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEf)
    return () => {
      window.removeEventListener("scroll", handleScrollEf)
    }
  }, [])

  return (
    <Fragment>
      <header className="headerNav">
        <nav className="container">
          {/* logo */}
          <Link href="/index">
            <a className="brand-logo">
              <img
                src="/img/symbol.svg"
                alt="Openfloor Logo"
                className="img-fluid"
              />
            </a>
          </Link>

          {/* toggle */}
          <button
            onClick={toggleNavbar}
            type="button"
            data-toggle="collapse"
            data-target="#toggleNav"
            className="navbar-toggler d-inline-block d-lg-none m-0 menu-toggle"
          >
            <img src={"/img/bandit.svg"} alt="" />
          </button>

          {/* Desktop Menu */}
          <Navs />
        </nav>
      </header>

      {/* SideDrawer 작업대기 */}
      <aside id="toggleNav" className="collapse bg-white">
        <ul>
          {menulist.map((menu) => (
            <li key={menu.pathname}>
              <a href={`/${menu.pathname}`} className="menuLink">
                {menu.pathname}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </Fragment>
  )
}

export default Header

// Global Nav
const Navs = (props) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div
      id="navbar"
      // role="dialog"
      className="menuList d-lg-flex d-none"
    >
      <ul>
        {menulist.map((menu) => (
          <li key={menu.pathname}>
            <a href={`/${menu.pathname}`} className="menuLink">
              {menu.pathname}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
