import React, { Fragment, useState, useEffect, useCallback } from "react"
import ActiveLink from "./ActiveLink"
import Link from "next/link"
import { useRouter } from "next/router"
import "./styles/app.scss"

const menulist = [
  { pathname: "Experience" },
  { pathname: "Projects" },
  // { pathname: "contact" },
]

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(false)
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
      <div className="topbar">
        <div className="marquee">
          <div className="marquee--track">
            <ul className="marquee--item">
              <li>Openfloor☀︎</li>
              <li>Troubleshooter</li>
              <li>Developer</li>
              <li>UX/UI Design</li>
              <li>Application</li>
              <li>ioT Service</li>
              <li>Techniques</li>
              <li>Multi-Platform</li>
              <li>bylee</li>
              <li>troublemaker</li>
            </ul>
            <ul className="marquee--item">
              <li>Openfloor☀︎</li>
              <li>Troubleshooter</li>
              <li>Developer</li>
              <li>UX/UI Design</li>
              <li>Application</li>
              <li>ioT Service</li>
              <li>Techniques</li>
              <li>Multi-Platform</li>
              <li>bylee</li>
              <li>troublemaker</li>
            </ul>
          </div>
        </div>
      </div>
      <header className="headerNav">
        <nav className="position-relative">
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

          {/* Desktop Menu */}
          <Navs />
          {/* toggle */}
          <button
            onClick={() => toggleNavbar()}
            type="button"
            className="d-inline-block d-lg-none m-0 menu-toggle"
          >
            <div className={`hamburger ${collapsed ? "active" : ""}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* SideDrawer 작업대기 */}

      <aside
        id="toggleNav"
        className={`d-lg-none ${collapsed ? "active" : ""}`}
      >
        <ul className="drawerNav">
          {menulist.map((menu) => (
            <li key={menu.pathname}>
              <a href={`/${menu.pathname}`} className="menuLink">
                {menu.pathname}
              </a>
            </li>
          ))}
          <li>
            <img src="/img/qrcode.svg" width={32} height={32} alt="" />
          </li>
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
        <li className="ml-4">
          <span className="bg-black text-white d-inline-block p-1">
            <img src="/img/qrcode.svg" width={40} height={40} alt="" />
          </span>
        </li>
      </ul>
    </div>
  )
}
