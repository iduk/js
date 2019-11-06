import React from 'react'
import Layout from '../components/layout'
import styles from '../components/styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
  render() {
    return (
      <Layout title="Openfloor Index" colors="bg-primary">
        {/* index page */}
        <section className={cx('index')}>
          <article className={cx('container')}>
            <div
              className={cx('jumbotron', 'p-4', 'pt-lg-5', 'rounded', 'row')}
              style={{ height: 400 }}
            >
              <div className={cx('col-12', 'col-lg-10', 'px-0', 'mx-auto')}>
                <h1 className={cx('display-4', 'font-weight-bold')}>
                  Openfloor solutions for everyone.
                </h1>
                <p className={cx('lead', 'my-4')}>
                  Duis vel massa aliquet, pretium nunc ac, viverra augue. Morbi
                  ultricies metus ac lorem tincidunt consectetur.
                </p>
              </div>
            </div>
          </article>

          <article className={cx('container-fluid')}>
            <div className={cx('row')}>
              <figure className={cx('figure', 'col-10', 'p-4', 'mx-auto')}>
                <img
                  src="https://images.unsplash.com/photo-1457612928689-a1ab27da0dad?ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80"
                  className={cx('figure-img', 'img-fluid', 'rounded')}
                  alt="bla bla"
                />
                <figcaption className={cx('figure-caption', 'sr-only')}>
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
          </article>

          <div className={cx('container')}>
            <article className={cx('row')}>
              <div className={cx('col-12', 'col-lg-6')}>글을 막 쓰는거야</div>
              <div className={cx('col-12', 'col-lg-6')}>여긴 사진</div>
            </article>
          </div>

          {/* 일단숨김 */}
          <div className={cx('d-none')}>
            접속정보
            <p style={{ fontSize: 12, color: '#999' }}>
              {this.props.userAgent}
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
