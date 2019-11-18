import React from 'react'
import Link from 'next/link'
import './styles/app.scss'

const Footer = () => (
	<footer className="footer py-6 mt-n6">
		<div className="wrap container pt-6">
			<div className="row">
				<div className="copyright col-12 col-md-6 text-center text-md-left">
					<h4>Openfloor, Inc.</h4>
					<p>
						Beautiful, projects gifted by the world's most generous of perfact
						teams.
					</p>
				</div>
				<div className="col-12 col-md-6 text-center text-md-right pt-3 pt-md-0 font-weight-lighter">
					<a href="mailto:by.lee@openfloor.kr" target="_blank">
						<i className="la la-envelope pr-2"></i>by.lee@openfloor.kr
					</a>
					<br />
					create by. iduk
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
