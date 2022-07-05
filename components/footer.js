import React from "react"
import Link from "next/link"
import "./styles/app.scss"

const Footer = () => (
  <footer className="footer">
    <div className="wrap container">
      <article className="row justify-content-between align-items-baseline">
        <div className="copyright col-12 col-lg-6">
          <h1 className="display-4">Hm...</h1>
        </div>

        <div className="col-12 col-lg-4 offset-lg-2 pt-4 pt-lg-0">
          <h1>CONTACT</h1>
          <address className="address-text">
            <p>lee@openfloor.kr</p>
            <p>+82 10-1234-5678</p>
          </address>
          <p className="copyright mt-5">
            <p>© Openfloor. ALL RIGHTS RESERVED, 2022.</p>
            <p>A Rolling Stone Gathers No Moss.</p>
          </p>
        </div>
      </article>
    </div>
  </footer>
)

export default Footer
