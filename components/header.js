import React, { Fragment, useState, useEffect, useCallback } from "react"
import ActiveLink from "./ActiveLink"
import Link from "next/link"
import { useRouter } from "next/router"
import "./styles/app.scss"

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
        <nav>
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
            data-target="#navbar"
            className="navbar-toggler d-inline-block d-lg-none m-0 menu-toggle"
          >
            <img src={"/img/bandit.svg"} alt="" />
          </button>

          {/* Menu */}
          <Navs />
        </nav>
      </header>
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

  const menulist = [
    { pathname: "experience" },
    { pathname: "projects" },
    { pathname: "contact" },
  ]

  return (
    <div
      id="navbar"
      // role="dialog"
      className="menuList collapse d-lg-flex"
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
