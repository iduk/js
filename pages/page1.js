import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

class Page1 extends Component {
  render() {
    return (
      <Layout title="Page1" colors="bg-warning">
        <div
          className={cx(
            'container-fluid',
            'mx-auto',
            'd-flex',
            'justify-content-between',
            'align-items-center'
          )}
          style={{ height: 800 }}
        >
          <article className={cx('row', 'w-100')}>
            <div className={cx('col-12', 'col-lg-10', 'mx-auto', 'h-100')}>
              {/* photo */}
              <section className={cx('imgList')} style={{ height: 600 }}>
                <ul className={cx('row')}>
                  <li
                    className={cx(
                      'col-6',
                      'col-lg-4',
                      'mb-4',
                      'p-3',
                      'position-relative'
                    )}
                  >
                    <a
                      href="#"
                      className={cx('text-dark', 'd-block', 'p-4')}
                      style={{ position: 'absolute', left: 0, top: 0 }}
                    >
                      <img
                        src="/img/portfolio-item-1.jpg"
                        alt="project"
                        className={cx('rounded', 'mb-3', 'img-fluid')}
                      />
                      <h4 className={cx('font-weight-bold')}>
                        Volkswagen Australia
                      </h4>
                      <p>Branding</p>
                    </a>
                  </li>

                  <li
                    className={cx(
                      'col-6',
                      'col-lg-4',
                      'mb-4',
                      'position-relative'
                    )}
                  >
                    <a
                      href="#"
                      className={cx('text-dark', 'd-block', 'p-4')}
                      style={{ position: 'absolute', left: 0, top: 0 }}
                    >
                      <img
                        src="/img/portfolio-item-1.jpg"
                        alt="project"
                        className={cx('rounded', 'mb-3', 'img-fluid')}
                      />
                      <h4 className={cx('font-weight-bold')}>
                        Volkswagen Australia
                      </h4>
                      <p>Branding</p>
                    </a>
                  </li>
                  <li
                    className={cx(
                      'col-6',
                      'col-lg-4',
                      'mb-4',
                      'position-relative'
                    )}
                  >
                    <a
                      href="#"
                      className={cx('text-dark', 'd-block', 'p-4')}
                      style={{ position: 'absolute', left: 0, top: 0 }}
                    >
                      <img
                        src="/img/portfolio-item-1.jpg"
                        alt="project"
                        className={cx('rounded', 'mb-3', 'img-fluid')}
                      />
                      <h4 className={cx('font-weight-bold')}>
                        Volkswagen Australia
                      </h4>
                      <p>Branding</p>
                    </a>
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
