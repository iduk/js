import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import '../components/styles/app.scss'


class Experience extends React.Component {
  render() {
    return (
      <Layout
        title="Experience"
        theme="bg-dark"
        color="text-white"
        logo="/img/symbol-white.svg"
      >
        <section className="py-6">
          <article className="container">
            <div className="row justify-content-between">
              <div className="col mb-5">
                <h1>Experience</h1>
              </div>
            </div>
          </article>
        </section>
        <section className="mt-4">
          <article className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="pr-0 pr-lg-5">
                  <h6 className="text-uppercase font-weight-bold">loadview</h6>
                  <h1 className="mb-4">
                    데이터 분석부터 플랫폼 설계까지
                  </h1>
                  <p className="mb-6 mb-md-8">
                    오픈플로어는 사람과 사람, 사람과 기술을 한층 가깝게 연결함으로써 세상을
                    어제보다 더 나은 곳으로 만들기 위해 노력하고 있습니다.
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1574081105756-3c8d8ed70198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
                  className="img-fluid rounded shadow"
                  alt="img"
                />
              </div>
            </div>
          </article>
        </section>

        {/* Steps */}
        <section className="my-6">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-auto col-md-12">
                    {/* Step */}
                    <div className="row no-gutters align-items-center mb-md-5">
                      <div className="col-auto">
                        <h3>
                          <span
                            className="badge badge-pill badge-danger"
                          >
                            1
                          </span>
                        </h3>
                      </div>
                      <div className="col">
                        <hr className="d-none d-md-block w-110 border-gray" />
                      </div>
                    </div>
                    {/* / .row */}
                  </div>
                  <div className="col col-md-12 ml-n3 ml-md-0">
                    {/* Heading */}
                    <h4 className="mb-3">Data to Information</h4>
                    {/* Text */}
                    <p className="mb-6 mb-md-0">데이터 수집 / 관제 / 분석</p>
                  </div>
                </div>
                {/* / .row */}
              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-auto col-md-12">
                    {/* Step */}
                    <div className="row no-gutters align-items-center mb-md-5">
                      <div className="col-auto">
                        <h3>
                          <span
                            className="badge badge-pill badge-danger"
                          >
                            2
                          </span>
                        </h3>
                      </div>
                      <div className="col">
                        <hr className="d-none d-md-block w-110 border-gray" />
                      </div>
                    </div>
                    {/* / .row */}
                  </div>
                  <div className="col col-md-12 ml-n3 ml-md-0">
                    {/* Heading */}
                    <h4 className="mb-3">Device Handling</h4>
                    {/* Text */}
                    <p className="mb-6 mb-md-0">
                      Multi-Platform / Device Control / IoT
                    </p>
                  </div>
                </div>
                {/* / .row */}
              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-auto col-md-12">
                    {/* Step */}
                    <div className="row no-gutters align-items-center mb-md-5">
                      <div className="col-auto">
                        <h3>
                          <span
                            className="badge badge-pill badge-danger"
                          >
                            3
                          </span>
                        </h3>
                      </div>
                      <div className="col">
                        {/* <hr className="d-none d-md-block w-110" /> */}
                      </div>
                    </div>
                    {/* / .row */}
                  </div>
                  <div className="col col-md-12 ml-n3 ml-md-0">
                    {/* Heading */}
                    <h4 className="mb-3">UX / UI</h4>
                    {/* Text */}
                    <p className="mb-0">
                      User Customizing Platform / Responsive Device
                    </p>
                  </div>
                </div>
                {/* / .row */}
              </div>
            </div>
            {/* / .row */}
          </div>
          {/* / .container */}
        </section>

        {/* avatars */}
        <section className="container py-3 py-lg-5 mt-4 mb-3">
          <h2 className="h3 my-2">Our team</h2>
          <p className="font-size-sm">People behind your great experience</p>
          <div className="row pt-3">
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="media align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="/img/avataaars1.png"
                  alt="Byoung Yoon, Lee"
                  width={96}
                />
                <div className="media-body pl-4">
                  <h4 className="pt-1 mb-2 font-weight-bold">
                    Byoung Yoon, Lee
                  </h4>
                  <p className="mb-0">CEO, Co-founder</p>
                  <a
                    className="nav-link-style text-nowrap"
                    href="mailto:openfloor@example.com"
                  >
                    <i class="la la-mail-bulk mr-2"></i>
                    openfloor@example.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="media align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="/img/avataaars2.png"
                  alt="Barbara Palson"
                  width={96}
                />
                <div className="media-body pl-4">
                  <h4 className="pt-1 mb-2 font-weight-bold">Barbara Palson</h4>
                  <p className="mb-0">Chief of Marketing</p>
                  <a
                    className="nav-link-style text-nowrap"
                    href="mailto:b.palson@example.com"
                  >
                    <i class="la la-mail-bulk mr-2"></i>
                    b.palson@example.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="media align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="/img/avataaars3.png"
                  alt="avatarImg"
                  width={96}
                />
                <div className="media-body pl-4">
                  <h4 className="pt-1 mb-2 font-weight-bold">William Smith</h4>
                  <p className="mb-0">Financial director</p>
                  <a
                    className="nav-link-style text-nowrap"
                    href="mailto:w.smith@example.com"
                  >
                    <i class="la la-mail-bulk mr-2"></i>
                    w.smith@example.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="media align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="/img/avataaars4.png"
                  alt="Amanda Gallaher"
                  width={96}
                />
                <div className="media-body pl-4">
                  <h4 className="pt-1 mb-2 font-weight-bold">
                    Amanda Gallaher
                  </h4>
                  <p className="mb-0">Lead UX designer</p>
                  <a
                    className="nav-link-style text-nowrap"
                    href="mailto:a.gallaher@example.com"
                  >
                    <i class="la la-mail-bulk mr-2"></i>
                    a.gallaher@example.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="media align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="/img/avataaars5.png"
                  alt="Benjamin Miller"
                  width={96}
                />
                <div className="media-body pl-4">
                  <h4 className="pt-1 mb-2 font-weight-bold">
                    Benjamin Miller
                  </h4>
                  <p className="mb-0">Website development</p>
                  <a
                    className="nav-link-style text-nowrap"
                    href="mailto:b.miller@example.com"
                  >
                    <i class="la la-mail-bulk mr-2"></i>
                    b.miller@example.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="media align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="/img/avataaars6.png"
                  alt="Miguel Rodrigez"
                  width={96}
                />
                <div className="media-body pl-4">
                  <h4 className="pt-1 mb-2 font-weight-bold">
                    Miguel Rodrigez
                  </h4>
                  <p className="mb-0">Content manager</p>
                  <a
                    className="nav-link-style text-nowrap"
                    href="mailto:b.miller@example.com"
                  >
                    <i class="la la-mail-bulk mr-2"></i>
                    m.rodrigez@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default Experience