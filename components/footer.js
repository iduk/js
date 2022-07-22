import React from "react"
import Link from "next/link"

const Footer = () => (
  <section className="footer mask">
    <div className="container">
      <article className="row justify-content-center">
        <div className="col-12">
          {/* content column */}
          <article className="row justify-content-between">
            <div className="col-12 col-lg-4">
              <h5 className="font-weight-bolder">CONTACT US</h5>
            </div>

            <div className="col-12 col-lg-4">
              <p className="copyright">
                <div className="social-list">
                  <li>
                    <span>Facebook</span>
                    <p>opf.facebook</p>
                  </li>
                  <li>
                    <span>Slack</span>
                    <p>openfloor.dev.slack.com</p>
                  </li>
                  <li>
                    <span>Instagram</span>
                    <p>@openfloor_dev</p>
                  </li>
                </div>
              </p>
            </div>

            <div className="col-12 col-lg-4 pt-4 pt-lg-0">
              <address className="address">
                <p>lee@openfloor.kr</p>
                <p>82 10-1234-5678</p>
              </address>
              <p className="copyright">
                <p>
                  © <strong>Openfloor, Inc.</strong> ALL RIGHTS RESERVED.
                </p>
                <p>Grind hard, shine hard.</p>
              </p>
            </div>
          </article>
          {/* \\ content column */}
        </div>
      </article>
    </div>
  </section>
)

export default Footer
