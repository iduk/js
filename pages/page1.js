import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

class Page1 extends Component {
  render() {
    return (
      <Layout title="Page1" theme="bg-dark" color="text-white">
        <div className={cx('container', 'mx-auto')}>
          <div className={cx('pb-2')} style={{ paddingTop: 100 }}>
            <h1 className={cx('font-weight-bold')}>Project Latest</h1>
            <p className={cx('lead', 'my-3')}>
              Our products help startups, designers, and agencies working faster
              than ever before.
            </p>
            <button
              type="button"
              className={cx('btn', 'btn-primary')}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Launch demo modal
            </button>
          </div>

          <div
            className={cx('modal', 'fade')}
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className={cx('modal-dialog')} role="document">
              <div className={cx('modal-content')}>asdfasdfasdfa</div>
            </div>
          </div>
          <article className={cx('row', 'w-100')}>
            <div className={cx('col-12', 'col-lg-12', 'my-4')}>
              {/* photo */}
              <section className={cx('imgList')}>
                <ul className={cx('row')}>
                  <li className={cx('col-6', 'col-lg-4', 'mb-4', 'p-3')}>
                    <a
                      href="#"
                      className={cx('d-block', 'p-4', 'position-relative')}
                    >
                      <img
                        src="/img/portfolio-item-1.jpg"
                        alt="project"
                        className={cx(
                          'rounded-lg',
                          'mb-3',
                          'img-fluid',
                          'shadow'
                        )}
                        style={{ position: 'absolute', left: 0, top: 0 }}
                      />
                    </a>
                    <h4 className={cx('font-weight-bold')}>
                      Project 'Only Young' 🥑
                    </h4>
                    <p>Branding</p>
                  </li>

                  <li className={cx('col-6', 'col-lg-4', 'mb-4', 'p-3')}>
                    <a
                      href="#"
                      className={cx('d-block', 'p-4', 'position-relative')}
                    >
                      <img
                        src="/img/portfolio-item-2.jpg"
                        alt="project"
                        className={cx(
                          'rounded-lg',
                          'mb-3',
                          'img-fluid',
                          'shadow'
                        )}
                        style={{ position: 'absolute', left: 0, top: 0 }}
                      />
                    </a>
                    <h4 className={cx('font-weight-bold')}>
                      Project 'Water SW' 🤓
                    </h4>
                    <p>React</p>
                  </li>

                  <li className={cx('col-6', 'col-lg-4', 'mb-4', 'p-3')}>
                    <a
                      href="#"
                      className={cx('d-block', 'p-4', 'position-relative')}
                    >
                      <img
                        src="/img/portfolio-item-3.jpg"
                        alt="project"
                        className={cx(
                          'rounded-lg',
                          'mb-3',
                          'img-fluid',
                          'shadow'
                        )}
                        style={{ position: 'absolute', left: 0, top: 0 }}
                      />
                    </a>
                    <h4 className={cx('font-weight-bold')}>
                      Project 'FirstSteps' 🐖🐄
                    </h4>
                    <p>Javascript, Sass</p>
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </Layout>
    )
  }
}
export default Page1
