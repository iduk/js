import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import './styles/app.scss'


const Layout = props => (
	<Fragment>
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Gothic+A1:300,400,700&display=swap"
				rel="stylesheet"
			/>
			<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" />
			<link href="/css/line-awesome.min.css" rel="stylesheet" />
			<link
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				rel="stylesheet"
				crossOrigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"
			/>
			<link rel="stylesheet" href="/css/animate.min.css" />

			<title>{props.title}</title>

			<meta charSet="utf-8" />
		</Head>

		<div id="wrap" className={`${props.theme}` + ` ${props.color}`}>
			<Sidebar theme="bg-dark" />
			<Header src={props.logo} />

			<main className="main">
				{props.children}
				<Footer />
			</main>
		</div>
	</Fragment>
)

export default Layout
