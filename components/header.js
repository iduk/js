import React, {
  Fragment,
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavLink } from "react-router-dom"
import Marquee from "react-fast-marquee"
import Logo from "../public/img/symbol.svg"

const Header = (props) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const toggleNavbar = () => setCollapsed(!collapsed)

  // const [pagePos, setPagePos] = useState(window.pageYOffset)
  // const [visible, setVisible] = useState(true)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let windowY = window.pageYOffset

  //     setVisible(pagePos > windowY)
  //     setPagePos(windowY)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // })

  // const scrollVisible = visible ? "" : "hide"

  return (
    <div className={`globalNav ${collapsed ? "open" : ""}`}>
      <div className={`topbar d-none`}>
        <Marquee gradient={false} speed={30}>
          <div className="mq-topbar bg-primary text-light">
            <span>Let's Get it Started!</span>
            <span>Openfloor</span>
            <span>Troubleshooter</span>
            <span>Back-End Developer</span>
            <span>Front-End Developer</span>
            <span>UX/UI Design</span>
            <span>Application</span>
            <span>ioT Service</span>
            <span>Techniques</span>
            <span>Multi-Platform</span>
            <span>Application</span>
            <span>ioT Service</span>
            <span>Techniques</span>
            <span>Multi-Platform</span>
            <span>Application</span>
            <span>ioT Service</span>
            <span>Techniques</span>
            <span>Multi-Platform</span>
          </div>
        </Marquee>
      </div>
      <div className="container-fluid">
        <article className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <nav className="navWrap">
              {/* logo */}
              <Link href="/index">
                <a className="brand-logo" title="Openfloor">
                  <Logo />
                </a>
              </Link>

              {/* Mobile Nav Toggle */}
              <button
                type="button"
                onClick={() => toggleNavbar()}
                className="btn nav-toggle"
              >
                <div className={`hamburger ${collapsed ? "active" : ""}`}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
              </button>

              {/* Desktop Menu */}
              <div className="topNav">
                <Navs />
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Header

export const navlinks = [
  { path: "/", title: "Index" },
  { path: "/experience", title: "experience" },
  { path: "/projects", title: "projects" },
]

// Global Nav
const Navs = () => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(menu.path)
  }
  return (
    <ol>
      {navlinks.map((menu) => (
        <li key={menu.postId}>
          <Link href={menu.path} onClick={handleClick}>
            <a
              className={`navLink ${
                router.pathname === menu.path ? "active" : ""
              }`}
            >
              {menu.title}
            </a>
          </Link>
        </li>
      ))}
    </ol>
  )
}
