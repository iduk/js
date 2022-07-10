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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-7">
              <p className="headline">Projects 2009/05 - 2022/07</p>
              <p>
                The whale, be it observed, lies almost entirely submerged,
                excepting the immediate parts operated upon.{" "}
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <img
                src="/img/000041510005.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
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
