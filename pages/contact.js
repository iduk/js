import React from "react"
import Layout from "../components/layout"
import ActiveLink from "../components/ActiveLink"
import Map from "../components/Map"
import "../components/styles/app.scss"

class Contact extends React.Component {
  render() {
    return (
      <Layout
        title="Contact"
        theme="bg-gray"
        color="text-white"
        logo={"/img/symbol-white.svg"}
      >
        <section className={"py-6"}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col mb-5">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mb-8">
              <article className="col-12 col-lg-4 mx-auto">
                <div className="p-4">
                  <i className="la la-3x la-map-marked"></i>
                  <h1 className="display-3">Address</h1>
                  <p className="lead my-1">
                    서울특별시 영등포구 국제금융로 8길 <br />
                    27-8 403호 (우 14568)
                  </p>
                </div>
              </article>

              <article className="col-12 col-lg-4 mt-lg-0 mt-4 mx-auto">
                <div className="p-4">
                  <i className="la la-3x la-phone"></i>
                  <h1 className="display-3">Contact</h1>
                  <p className="lead my-1">
                    <span className="d-inline-block mr-2">Tel.</span>
                    010-1234-4567
                  </p>
                  <p className="lead my-1">
                    <span className="d-inline-block mr-2">Fax.</span>
                    070-1234-5678(~9)
                  </p>
                  <p className="lead my-1">
                    <span className="d-inline-block mr-2">Email.</span>
                    <a href="mailto:by.lee@openfloor.kr" target="_blank">
                      by.lee@openfloor.kr
                    </a>
                  </p>
                </div>
              </article>

              <article className="col-12 col-lg-4 mt-lg-0 mt-4 mx-auto">
                <div className="p-4">
                  <i className="la la-3x la-comment"></i>
                  <h1 className="display-3">Messenger</h1>
                  <p className="lead">
                    <i className="la la-facebook mr-2"></i>
                    <a href="#" target="_blank">
                      openfloor.facebook.com
                    </a>
                  </p>
                  <p className="lead">
                    <i className="la la-twitter mr-2"></i>
                    <a href="#" target="_blank">
                      twitter.com/openfloor
                    </a>
                  </p>
                  <p className="lead">
                    <i className="la la-github mr-2"></i>
                    <a href="#" target="_blank">
                      openfloor.github.io
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default Contact
