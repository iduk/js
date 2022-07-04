import React, { useState, Fragment } from "react"
import Head from "next/head"
import Link from "next/link"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import "../components/styles/app.scss"

class Projects extends React.Component {
  render() {
    return (
      <Layout title="Projects">
        <header>
          <h1>OPEN_01</h1>
          <p className="lead">못할것도없지</p>
        </header>

        {/* Gallery */}
        <section>
          <article className="container">
            <div className="row">
              <div className="col-12 col-lg-12 my-5">
                {/* photo */}
                <section className="imgList mx-auto">
                  <ul className="row">
                    <li className="col-6 col-lg-4 mb-2 p-3">
                      <a
                        data-fancybox="images"
                        className="d-block position-relative"
                      >
                        <img
                          src="/img/portfolio-item-1.jpg"
                          alt="project"
                          className="img-fluid"
                        />
                        <h4>Project Sample Page</h4>
                        <p>Branding</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </article>
        </section>

        {/* listgroup Start */}
        <section className="container">
          {/* <div className="py-4">
            <h2>솔루션 구매 질문</h2>
            <p>sdafasdf</p>
					</div> */}
          <div
            className="card bg-transparent border-0 accordion mb-5 mb-md-6"
            id="faqAccrodion"
          >
            <div className="list-group list-group-flush">
              <div className="list-group-item ">
                {/* Header */}
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    {/* Heading */}
                    <h4 className="font-weight-bold mb-0">제작문의</h4>
                    {/* <p className="font-size-sm mb-0">
											Issues related to logging in, out, or about multiple
											devices.
										</p> */}
                  </div>
                  {/* Badge */}
                  <span className="badge badge-pill badge-danger ml-4">
                    <span className="h6 text-uppercase">전체</span>
                  </span>
                </div>
              </div>

              {/* List */}
              <div className="list-group-item">
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpOne"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpOne"
                >
                  <span className="mr-4">계약은 어떻게 이루어지나요?</span>
                  <div className="ml-auto">
                    <span className="collapse-chevron">
                      <i className="la la-chevron-circle-down" />
                    </span>
                  </div>
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpOne"
                  data-parent="#faqAccrodion"
                >
                  <div className="py-5">
                    <p className="text-gray-700">
                      로그인을 하시면 휴면 아이디로 전환되지 않고, 계속 이용하실
                      수 있습니다. 만약 로그인을 하지 못해 휴면 아이디로 전환이
                      되어도, 전환 후 4년간 '아이디 재사용 신청'이 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Items */}

              {/* Items */}
              <div className="list-group-item">
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpTwo"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpTwo"
                >
                  <span className="mr-4">
                    기간을 설정하여 통계를 볼 수 없나요?
                  </span>
                  <div className="ml-auto">
                    <span className="collapse-chevron">
                      <i className="la la-chevron-circle-down" />
                    </span>
                  </div>
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpTwo"
                  data-parent="#faqAccrodion"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      시작일과 종료일을 설정하여 통계를 볼 수 있는 통계 기간
                      설정 기능을 준비하고 있습니다. 빠른 시일 내에 원하는
                      기간을 설정하여 일간, 주간, 월간 등으로 통계를 보실 수
                      있도록 하겠습니다.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Items */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

// Modal Exam
function MyModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-lg bg-white font-weight-lighter shadow"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={handleShow}
        data-backdrop="static"
      >
        Support for...
      </button>

      <section className="modal fade" id="exampleModal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <header className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="la la-times"></i>
              </button>
            </header>
            <main className="modal-body">modal open</main>
            <footer className="modal-footer">
              <button
                type="button"
                className="btn btn-lg btn-gray"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-lg btn-danger"
                onClick={handleClose}
              >
                Save changes
              </button>
            </footer>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default Projects
