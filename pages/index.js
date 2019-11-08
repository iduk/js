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
      <Layout title="Openfloor Index" theme="bg-cream" color="text-black">
        {/* index page */}
        <section className={cx('index')}>
          <article className={cx('container')}>
            <div className={cx('jumbotron', 'p-4', 'rounded', 'row')}>
              <div className={cx('col-12', 'col-lg-10', 'px-0', 'mx-auto')}>
                <h1 className={cx('display-4', 'font-weight-bold')}>
                  Openfloor makes Quality.
                </h1>
                <h3>
                  <span className={cx('mr-1', 'badge', 'badge-primary')}>
                    colors1
                  </span>
                  <span className={cx('mr-1', 'badge', 'badge-danger')}>
                    colors2
                  </span>
                  <span className={cx('mr-1', 'badge', 'badge-cream')}>
                    colors3
                  </span>
                </h3>
                <p className={cx('lead', 'my-4')}>
                  Duis vel massa aliquet, pretium nunc ac, viverra augue. Morbi
                  ultricies metus ac lorem tincidunt consectetur.
                </p>
                <p className={cx('text-right')}>
                  <a
                    role="button"
                    href="/"
                    className={cx('btn', 'btn-lg', 'btn-danger')}
                  >
                    <span className={cx('mr-3')}>Openfloor Projects</span>
                    <i className={cx('la', 'la-long-arrow-alt-right')}></i>
                  </a>
                </p>
              </div>
            </div>
          </article>

          <article className={cx('container-fluid', 'py-3')}>
            <div className={cx('row')}>
              <figure className={cx('figure', 'col-10', 'px-4', 'mx-auto')}>
                <img
                  src="https://images.unsplash.com/photo-1532619031801-97b02fb2de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
                  className={cx(
                    'figure-img',
                    'img-fluid',
                    'rounded',
                    'shadow-lg'
                  )}
                  alt="bla bla"
                />
                <figcaption className={cx('figure-caption', 'sr-only')}>
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
          </article>

          <section className={cx('container', 'section', 'py-6')}>
            <article className={cx('row')}>
              <div className={cx('col-12', 'col-lg-5')}>
                <div className={cx('p-4')}>
                  <h3>Openfloor's Founder</h3>
                  <h1 className={cx('mb-4')}>Lee Byung Yoon</h1>
                  <p className={cx('text-sm', 'text-black-50')}>
                    모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이
                    정하는 교육을 받게 할 의무를 진다. 국회의원은 그 지위를
                    남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에
                    의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을
                    위하여 그 취득을 알선할 수 없다.
                  </p>
                </div>
              </div>
              <div className={cx('col-12', 'col-lg-7')}>
                <article className={cx('row')}>
                  <figure className={cx('figure', 'col-6', 'p-4', 'mx-auto')}>
                    <img
                      src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
                      className={cx(
                        'figure-img',
                        'img-fluid',
                        'rounded',
                        'rounded-lg',
                        'shadow'
                      )}
                      alt="bla bla"
                    />
                  </figure>
                  <figure className={cx('figure', 'col-6', 'p-4', 'mx-auto')}>
                    <img
                      src="https://images.unsplash.com/photo-1572981872666-80a4bd158524?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
                      className={cx(
                        'figure-img',
                        'img-fluid',
                        'rounded',
                        'rounded-lg',
                        'shadow'
                      )}
                      alt="bla bla"
                    />
                  </figure>
                </article>
              </div>
            </article>
          </section>

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
