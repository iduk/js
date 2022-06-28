import React from "react"
import Link from "next/link"
import "./styles/app.scss"

const Footer = () => (
  <footer className="footer py-6 mt-n6">
    <div className="wrap container pt-6">
      <div className="row">
        <div className="copyright col-12 col-md-6 text-center text-md-left">
          <h4>OpenFloor.</h4>
          <p>개발전문회사이다. 간간히 디자인+퍼블리싱</p>
          <p>웬만하면 카톡주세요 😉</p>
        </div>
        <div className="col-12 col-md-6 text-center text-md-right pt-3 pt-md-0 font-weight-lighter">
          <a href="mailto:by.lee@openfloor.kr" target="_blank">
            <i className="la la-envelope pr-2"></i>by.lee@openfloor.kr
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
