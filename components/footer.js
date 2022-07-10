import React from "react"
import Link from "next/link"
import "./styles/app.scss"

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <article className="row justify-content-between">
        <div className="col-12 col-lg-8">
          <h1 className="text-deco">Openfloor</h1>
          <p className="copyright mt-3">
            <div className="d-flex">
              <Link to="#">
                <a>facebook</a>
              </Link>
              <Link to="#">
                <a>Blog</a>
              </Link>
              <Link to="#">
                <a>Instagram</a>
              </Link>
              <Link to="#">
                <a>Slack</a>
              </Link>
            </div>
          </p>
        </div>

        <div className="col-12 col-lg-4 pt-4 pt-lg-0">
          <h1>Contact Us</h1>
          <address className="address-text">
            <p>lee@openfloor.kr</p>
            <p>+82 10-1234-5678</p>
          </address>
          <p className="copyright mt-5">
            <p>© Openfloor. ALL RIGHTS RESERVED, SINCE 2005</p>
            <p>Grind hard, shine hard. - Dwayne Johnson</p>
          </p>
        </div>
      </article>
    </div>
  </footer>
)

export default Footer
