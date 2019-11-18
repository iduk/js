import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import '../components/styles/app.scss'

export default class Page1 extends React.Component {
  render() {
    return (
      <Layout
        title="Page1"
        theme="bg-gray-dark"
        color="text-white"
        logo="/img/symbol-white.svg"
      >
        <section className="py-6">
          <article className="container">
            <div className="row justify-content-between">
              <div className="col mb-5">
                <h1>Experience</h1>
                <p className="lead">
                  Our products help startups, designers, and agencies working
                  faster than ever before.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="container bg-lotate-img mb-6">
          <article className="row">
            <div className="col-12">
              {/* start */}
              <div className="row">
                <figure className="col-6 col-md-3">
                  <a data-fancybox="images">
                    <img
                      src="https://images.unsplash.com/photo-1525095182007-3874c4e2b38b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                      className="img-fluid rounded shadow mb-2"
                      alt="..."
                    />
                  </a>
                </figure>

                <figure className="col-6 col-md-3">
                  <a data-fancybox="images">
                    <img
                      src="https://images.unsplash.com/photo-1571349758057-831a4b77d3df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1534&q=80https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=3067&q=80"
                      className="img-fluid rounded shadow mb-2"
                      alt="..."
                    />
                  </a>
                </figure>

                <figure className="col-6 col-md-3">
                  <a data-fancybox="images">
                    <img
                      src="https://images.unsplash.com/photo-1534137667199-675a46e143f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                      className="img-fluid rounded shadow mb-2"
                      alt="..."
                    />
                  </a>
                </figure>

                <figure className="col-3">
                  <a data-fancybox="images">
                    <img
                      src="https://images.unsplash.com/photo-1478558393578-343e5e0128e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                      className="img-fluid rounded shadow mb-2"
                      alt="..."
                    />
                  </a>
                </figure>
              </div>
              {/* end */}
            </div>
          </article>
        </section>
      </Layout>
    )
  }
}
