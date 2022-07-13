import React, {
  Fragment,
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react"
import ActiveLink from "./ActiveLink"
import Link from "next/link"
import { useRouter } from "next/router"
import Marquee from "react-fast-marquee"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import "../components/styles/global.scss"
import { NavLink } from "react-router-dom"

const menulist = [
  { id: "nav1", path: "/experience", title: "experience" },
  { id: "nav2", path: "/projects", title: "projects" },
  // { pathname: "contact" },
]

function useSelector() {
  const ref = useRef()
  const q = useMemo(() => gsap.utils.selector(ref), [ref])
  return [q, ref]
}

const Header = (props) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const [q, ref] = useSelector()
  const [showBox, setShowBox] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  const timeline = gsap.timeline({ yoyo: true })

  useEffect(() => {
    // ScrollTrigger.create({
    //   start: "top -100",
    //   end: 99999,
    //   toggleClass: {
    //     className: "navWrap--scroll",
    //     targets: ".navWrap",
    //   },
    // })
    // gsap.to(".navWrap", {
    //   ease: "none",
    // }) // gsap
  }, [])

  return (
    <Fragment>
      <header className={`headerNav ${collapsed ? "headerNav--active" : ""}`}>
        <div className={`topbar`}>
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
          <nav className="navWrap">
            {/* logo */}
            <Link href="/index">
              <a className="brand-logo" title="Openfloor">
                <img src="/img/symbol.svg" alt="Openfloor Logo" />
              </a>
            </Link>

            {/* Desktop Menu */}
            <div id="navbar" className="topNav">
              <Navs />
            </div>

            {/* Mobile > Menu Toggle */}
            <button
              onClick={() => toggleNavbar()}
              type="button"
              className="d-inline-block d-lg-none m-0 nav-toggle"
            >
              <div className={`hamburger ${collapsed ? "active" : ""}`}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* SideDrawer 작업대기 */}

      <aside
        id="toggleNav"
        className={`d-lg-none ${collapsed ? "active" : ""}`}
      >
        <div className="drawerNav">
          <Navs />
        </div>
      </aside>
    </Fragment>
  )
}

export default Header

// Global Nav
const Navs = () => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(menu.path)
  }

  return (
    <ol>
      {menulist.map((menu) => (
        <li key={menu.id}>
          <a
            href={menu.path}
            className={`navLink ${
              router.pathname === menu.path ? "active" : ""
            }`}
          >
            {menu.title}
          </a>
        </li>
      ))}
    </ol>
  )
}
