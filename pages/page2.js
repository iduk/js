import React, { useState, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import '../components/styles/app.scss'

export default class Page2 extends React.Component {
  render() {
    return (
      <Layout
        title="Page1"
        theme="bg-warning"
        color="text-black"
        logo={'/img/symbol.svg'}
      >
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <section className="py-6">
          <article className="container">
            <div className="row justify-content-between">
              <div className="col mb-5">
                <h1>Projects</h1>
                <p className="lead">
                  Our products help startups, designers, and agencies working
                  faster than ever before.
                </p>
              </div>
            </div>
            <MyModal />
          </article>

          <article className={'container'}>
            <div className="row">
              <div className={'col-12 col-lg-12 my-5'}>
                {/* photo */}
                <section className={'imgList mx-auto'}>
                  <ul className={'row'}>
                    <li className={'col-6 col-lg-4 mb-2 p-3'}>
                      <a
                        data-fancybox="images"
                        className={'d-block position-relative'}
                      >
                        <img
                          src="/img/portfolio-item-1.jpg"
                          alt="project"
                          className={'rounded-lg mb-4 img-fluid shadow'}
                        />
                        <h4 className={'font-weight-bold'}>
                          Project 'Only Young'
                        </h4>
                        <p>Branding</p>
                      </a>
                    </li>

                    <li className={'col-6 col-lg-4 mb-2 p-3'}>
                      <a
                        data-fancybox="images"
                        className={'d-block position-relative'}
                      >
                        <img
                          src="/img/portfolio-item-2.jpg"
                          alt="project"
                          className={'rounded-lg mb-4 img-fluid shadow'}
                        />
                        <h4 className={'font-weight-bold'}>
                          Project 'Water SW'
                        </h4>
                        <p>React</p>
                      </a>
                    </li>

                    <li className={'col-6 col-lg-4 mb-2 p-3'}>
                      <a
                        data-fancybox="images"
                        className={'d-block position-relative'}
                      >
                        <img
                          src="/img/portfolio-item-3.jpg"
                          alt="project"
                          className={'rounded-lg mb-4 img-fluid shadow'}
                        />
                        <h4 className={'font-weight-bold'}>
                          Project 'FirstSteps'
                        </h4>
                        <p>Javascript, Sass</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    )
  }
}

// Modal Exam
function MyModal(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-lg btn-danger"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={handleShow}
        data-backdrop="static"
      >
        Launch demo modal
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
