import React from 'react'
import Layout from '../components/layout'
import '../components/styles/app.scss'
import ActiveLink from '../components/ActiveLink'


// index
class Index extends React.Component {
  render() {
    return (
      <Layout
        title="Openfloor Index"
        theme="bg-white"
        color="text-black"
        logo={"/img/symbol.svg"}
      >
        {/* index page */}
        <div className="index">
          {/* intro */}
          <section className="feature text-white py-8">
            <article className="container py-4 mt-8 mb-4">
              <div className="row">
                <div className="col-12 text-lg-right text-center">
                  <h1 className="display-3 pb-3">Openfloor, Makes Quality</h1>
                  {/* <p className="py-4">
										"오픈플로어"는 고객사의 성공적인 오픈소스 플랫폼 기반의
										차별화된 서비스를 제공하여 <br />
										고객사와의 동반성장을 약속드립니다.
									</p> */}
                  <p className="pt-2">
                    <a
                      role="button"
                      className="btn btn-lg btn-danger wow tada"
                      data-wow-delay="0.5s"
                      href="/projects"
                      as={process.env.BACKEND_URL + `/projects`}
                    >
                      Projects View
                      <i className="la la-arrow-right pl-4"></i>
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* section1 */}
          <section className="container-fluid py-3">
            <ul className="logos row justify-content-center align-items-center text-light">
              <li className="col-3 col-md-2">
                <div className="text-center py-3">
                  <img
                    src="/img/partners-samsung.svg"
                    className="img-fluid"
                    width="150"
                    alt="Partners logo"
                  />
                </div>
              </li>
              <li className="col-3 col-md-2">
                <div className="text-center py-3">
                  <img
                    src="/img/partners-oliveyoung.svg"
                    className="img-fluid"
                    width="200"
                    alt="Partners logo"
                  />
                </div>
              </li>
              <li className="col-3 col-md-2">
                <div className="text-center py-3">
                  <img
                    src="/img/partners-suwon.svg"
                    className="img-fluid"
                    width="90"
                    alt="Partners logo"
                  />
                </div>
              </li>
              <li className="col-3 col-md-2">
                <div className="text-center py-3">
                  <img
                    src="/img/partners-donggu.svg"
                    className="img-fluid"
                    width="180"
                    alt="Partners logo"
                  />
                </div>
              </li>
              {/* <li className="col-3 col-md-2">
                <div className="text-center py-3">
                  <img
                    src="/img/partners-donggu.svg"
                    className="img-fluid"
                    width="200"
                    alt="Partners logo"
                  />
                </div>
              </li>
              <li className="col-3 col-md-2">
                <div className="text-center py-3">
                  <img
                    src="/img/partners-oliveyoung.svg"
                    className="img-fluid"
                    width="200"
                    alt="Partners logo"
                  />
                </div>
              </li> */}
            </ul>
          </section>
          <section className="container my-8">
            <div className="row align-items-center">
              <article className="col-12 col-md-6 col-lg-7">
                <div
                  className="mb-8 mb-md-0 wow fadeInLeft"
                  data-wow-delay="0s"
                >
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
                    alt="..."
                    className="img-fluid rounded-lg float-right mr-md-6 mb-6 mb-md-0"
                  />
                </div>
              </article>

              <article className="col-10 col-md-6 col-lg-5 mb-md-0 mb-4 mx-auto">
                <div className="d-flex wow fadeInRight" data-wow-delay="0s">
                  <i className="la la-3x la-share-alt"></i>
                  <div className="ml-4">
                    <h3>Experience for Various Field</h3>
                    <p className="text-gray-700 mb-6">
                      다양한 분야의 경험을 바탕으로 "안정적인 업무 관리"
                    </p>
                  </div>
                </div>
                <div className="d-flex wow fadeInRight" data-wow-delay="0.1s">
                  <i className="la la-3x la-code-branch"></i>
                  <div className="ml-4">
                    <h3>Team Work for Long Time</h3>
                    <p className="text-gray-700 mb-6">
                      오랜 기간 다져온 팀워크로 "효율적인 업무 진행"
                    </p>
                  </div>
                </div>
                <div className="d-flex wow fadeInRight" data-wow-delay="0.2s">
                  <i className="la la-3x la-magic"></i>
                  <div className="ml-4">
                    <h3>Communication for High Value</h3>
                    <p className="text-gray-700 mb-0">
                      높은 가치 실현을 위한 커뮤니케이션으로 "심도있는 업무
                      분석"
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* section2 */}
          <section
            className="container-fluid mt-8 bg-primary text-white wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="row d-flex align-items-center">
              {/* <article
                className="col-12 col-md-4 px-0  overflow-hidden"
                style={{ height: "24em" }}
              >
                <img
                  src="/img/sample-4.png"
                  alt="Image"
                  className="card-img img-fluid"
                /> 
              </article>*/}
              <article
                className="col-12 col-md-12 d-flex align-items-center"
                style={{ height: "30em" }}
              >
                <div className="text-center mx-auto p-6">
                  <h3 className="display-4 pb-2">Future Business</h3>
                  <blockquote className="blockquote font-weight-lighter">
                    Everything your platform could need.
                  </blockquote>
                </div>
              </article>
            </div>
          </section>

          {/* abcdef */}
          <section className="container-fluid bg-white py-8 wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-4">
                  <h1 className="font-weight-bold">Our Performance</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-12 col-lg-6 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <article className="media py-5">
                    <span className="mr-3 text-success">
                      <i className="la la-3x la-check-circle"></i>
                    </span>
                    <div className="media-body">
                      <h3 className="mt-0">Performance</h3>
                      <p>
                        Modernizr makes it easy to deliver tiered experiences:
                        make use of the latest and greatest features in browsers
                        which support them, without leaving less fortunate users
                        high and dry.
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-12 col-lg-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <article className="media py-5">
                    <span className="mr-3 text-success">
                      <i className="la la-3x la-check-circle"></i>
                    </span>
                    <div className="media-body">
                      <h3 className="mt-0">Performance</h3>
                      <p>
                        All web developers come up against differences between
                        browsers and devices. That’s largely due to different
                        feature sets: the latest versions of the popular
                        browsers can do some awesome things which older browsers
                        can’t – but we still have to support the older ones.
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-12 col-lg-6 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <article className="media py-5">
                    <span className="mr-3 text-success">
                      <i className="la la-3x la-check-circle"></i>
                    </span>
                    <div className="media-body">
                      <h3 className="mt-0">Performance</h3>
                      <p>
                        All web developers come up against differences between
                        browsers and devices. That’s largely due to different
                        feature sets: the latest versions of the popular
                        browsers can do some awesome things which older browsers
                        can’t – but we still have to support the older ones.
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-12 col-lg-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <article className="media py-5">
                    <span className="mr-3 text-success">
                      <i className="la la-3x la-check-circle"></i>
                    </span>
                    <div className="media-body">
                      <h3 className="mt-0">Performance</h3>
                      <p>
                        It’s a collection of superfast tests – or “detects” as
                        we like to call them – which run as your web page loads,
                        then you can use the results to tailor the experience to
                        the user.
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-12 col-lg-6 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <article className="media py-5">
                    <span className="mr-3 text-success">
                      <i className="la la-3x la-check-circle"></i>
                    </span>
                    <div className="media-body">
                      <h3 className="mt-0">Performance</h3>
                      <p>
                        It’s a collection of superfast tests – or “detects” as
                        we like to call them – which run as your web page loads,
                        then you can use the results to tailor the experience to
                        the user.
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-12 col-lg-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <article className="media py-5">
                    <span className="mr-3 text-success">
                      <i className="la la-3x la-check-circle"></i>
                    </span>
                    <div className="media-body">
                      <h3 className="mt-0">Performance</h3>
                      <p>
                        It’s a collection of superfast tests – or “detects” as
                        we like to call them – which run as your web page loads,
                        then you can use the results to tailor the experience to
                        the user.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* review section */}
          <section className="container-fluid bg-lighter py-8">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-4">
                {/* review */}
                <article
                  className="card border-0 bg-white text-center mb-3 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="card-body p-5">
                    <span className="d-block my-3">
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                    </span>
                    <blockquote className="blockquote">
                      웹 사이트 개발 서비스와 함께 제작 서비스를 사용했습니다.
                      그들은 함께 일하는 것을 즐거워했으며 모든 질문에
                      대답했습니다. 나는 내 고객 중 일부에게 추천했습니다.
                      <footer className="blockquote-footer mt-4 text-primary">
                        올리브네트웍스 담당자
                      </footer>
                    </blockquote>
                  </div>
                </article>
              </div>
              <div className="col-12 col-lg-4">
                {/* review */}
                <article
                  className="card border-0 bg-white text-center mb-3 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="card-body p-5">
                    <span className="d-block my-3">
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                    </span>
                    <blockquote className="blockquote">
                      웹 사이트 개발 서비스와 함께 제작 서비스를 사용했습니다.
                      그들은 함께 일하는 것을 즐거워했으며 모든 질문에
                      대답했습니다. 나는 내 고객 중 일부에게 추천했습니다.
                      <footer className="blockquote-footer mt-4 text-primary">
                        올리브네트웍스 담당자
                      </footer>
                    </blockquote>
                  </div>
                </article>
              </div>
              <div className="col-12 col-lg-4">
                {/* review */}
                <article
                  className="card border-0 bg-white text-center mb-3 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="card-body p-5">
                    <span className="d-block my-3">
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                      <i className="star la la-star text-warning"></i>
                    </span>
                    <blockquote className="blockquote">
                      웹 사이트 개발 서비스와 함께 제작 서비스를 사용했습니다.
                      그들은 함께 일하는 것을 즐거워했으며 모든 질문에
                      대답했습니다. 나는 내 고객 중 일부에게 추천했습니다.
                      <footer className="blockquote-footer mt-4 text-primary">
                        올리브네트웍스 담당자
                      </footer>
                    </blockquote>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* email contact
          <section className="mx-md-0 mx-3">
            <article className="container p-5 p-lg-6 bg-white shadow-lg rounded">
              <div className="row d-flex align-items-center">
                
                <div className="col-12 col-md-8 pr-md-5 pb-md-0 pb-3">
                  <h2 className="font-weight-bold py-2">Project & Solution</h2>
                  <p className="text-sm">
                    프로젝트 견적 및 문의는 이쪽으로...
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <form className="py-4">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <button href="/" className="btn btn-danger btn-block">
                      Send!
                    </button>
                  </form>
                </div>
              </div>
            </article>
          </section>
          */}
        </div>
      </Layout>
    )
  }
}

export default Index
