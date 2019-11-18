import React, { Fragment, useState } from 'react'
import ActiveLink from './ActiveLink'
import Link from 'next/link'
import './styles/app.scss'

const Header = props => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
		<Fragment>
			<header className="headerNav">
				<nav>
					{/* logo */}
					<Link href="/" as={process.env.BACKEND_URL + '/'}>
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
						role="dialog"
						className="menuList collapse d-lg-flex"
					>
						<ul>
							<li>
								<ActiveLink
									activeClassName="active"
									href="/index"
									as={process.env.BACKEND_URL + `/`}
								>
									<a className="menuLink">Openfloor</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									activeClassName="active"
									href="/page1"
									as={process.env.BACKEND_URL + `/page1`}
								>
									<a className="menuLink">Experience</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									activeClassName="active"
									href="/page2"
									as={process.env.BACKEND_URL + `/page2`}
								>
									<a className="menuLink">Projects</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									activeClassName="active"
									href="/page3"
									as={process.env.BACKEND_URL + `/page3`}
								>
									<a className="menuLink">ContactUs</a>
								</ActiveLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</Fragment>
	)
}

export default Header
