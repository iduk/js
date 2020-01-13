import React from 'react'
import Layout from '../components/layout'
import ActiveLink from '../components/ActiveLink'
import Map from '../components/Map'
import '../components/styles/app.scss'

class Page3 extends React.Component {
  render() {
    return (
      <Layout
        title="Page3"
        theme="bg-info"
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
                <div className="text-center p-4">
                  <i className="la la-3x la-map-marked"></i>
                  <h5 className="my-3">Address</h5>
                  <p className="lead my-1">
                    서울특별시 영등포구 국제금융로 8길 27-8, 403
                  </p>
                  <span>우편번호 14568</span>
                </div>
              </article>

              <article className="col-12 col-lg-4 mt-lg-0 mt-4 mx-auto">
                <div className="text-center p-4">
                  <i className="la la-3x la-phone"></i>
                  <h5 className="my-3">Contact</h5>
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
                <div className="text-center p-4">
                  <i className="la la-3x la-comment"></i>
                  <h5 className="my-3">Messenger</h5>
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

          <section className="container-fluid">
            <div className="row d-flex align-items-center">
              <Map />
            </div>
          </section>

          <div className="container">
            <div className="row">
              <article className="col-12 col-lg-6 mx-auto">
                <div className="text-center py-5">
                  <h2 className="display-5">Ask Services</h2>
                  <p className="font-weight-light">
                    Whether you have questions or you would just like to say
                    hello, contact us.
                  </p>
                </div>
                <form>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Example label</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Example input"
                    />
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Another input"
                    />
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <textarea
                      rows="8"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Another input"
                    />
                  </div>
                  <div className="mt-4 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      <i className="la la-mail-bulk mr-3"></i>
                      메일 보내기
                    </button>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default Page3
