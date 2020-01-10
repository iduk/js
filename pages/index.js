import React from 'react'
import Layout from '../components/layout'
import '../components/styles/app.scss'


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
                    <button
                      href="/"
                      className="btn btn-lg btn-danger wow tada"
                      data-wow-delay="0.5s"
                    >
                      Projects View
                      <i className="la la-arrow-right pl-4"></i>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* section1 */}
          <section className="container-fluid py-4 overflow-hidden">
            <ul className="logos row align-items-center text-light text-nowrap">
              <li className="col-4 col-lg-2">
                <div className="text-center my-3">
                  <i className="lab la-5x la-docker"></i>
                </div>
              </li>
              <li className="col-4 col-lg-2">
                <div className="text-center my-3">
                  <i className="lab la-5x la-slack"></i>
                </div>
              </li>
              <li className="col-4 col-lg-2">
                <div className="text-center my-3">
                  <i className="lab la-5x la-amazon"></i>
                </div>
              </li>
              <li className="col-4 col-lg-2">
                <div className="text-center my-3">
                  <i className="lab la-5x la-wordpress"></i>
                </div>
              </li>
              <li className="col-4 col-lg-2">
                <div className="text-center my-3">
                  <i className="lab la-5x la-tencent-weibo"></i>
                </div>
              </li>
              <li className="col-4 col-lg-2">
                <div className="text-center my-3">
                  <i className="lab la-5x la-tripadvisor"></i>
                </div>
              </li>
            </ul>
          </section>
          <section className="container my-8">
            <div className="row align-items-center">
              <article className="col-12 col-md-6 col-lg-7">
                <div className="mb-8 mb-md-0">
                  <img
                    src="/img/sample-1.jpg"
                    alt="..."
                    className="img-fluid rounded-lg float-right mr-md-6 mb-6 mb-md-0"
                  />
                </div>
              </article>

              <article
                className="col-10 col-md-6 col-lg-5 mb-md-0 mb-4 mx-auto  wow slideInDown"
                data-wow-delay="0s"
              >
                <div className="d-flex">
                  <i className="la la-3x la-share-alt"></i>
                  <div className="ml-4">
                    <h3>Experience for Various Field</h3>
                    <p className="text-gray-700 mb-6">
                      다양한 분야의 경험을 바탕으로 "안정적인 업무 관리"
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="la la-3x la-code-branch"></i>
                  <div className="ml-4">
                    <h3>Team Work for Long Time</h3>
                    <p className="text-gray-700 mb-6">
                      오랜 기간 다져온 팀워크로 "효율적인 업무 진행"
                    </p>
                  </div>
                </div>
                <div className="d-flex">
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
          <section className="container-fluid my-8 bg-info text-white">
            <div className="row d-flex align-items-center">
              <article
                className="col-12 col-md-6 d-flex align-items-center"
                style={{ height: "24em" }}
              >
                <div className="text-center mx-auto p-8">
                  <h1 className="display-4">Openfloor</h1>
                </div>
              </article>

              <article
                className="col-12 col-md-6 px-0  overflow-hidden"
                style={{ height: "24em" }}
              >
                <img
                  src="/img/sample-4.png"
                  alt="Image"
                  className="card-img img-fluid"
                />
                <div className="card-img-overlay d-flex align-items-center bg-primary-soft">
                  <div className="text-center mx-auto p-8">
                    <h1 className="display-4">Perfect Team</h1>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* services */}
          {/* <section className={'container px-0 my-8'}>
            <article className={'row d-flex align-items-center'}>
              <div className={'col-12 mx-auto'}>
                <div className={'p-5 text-center'}>
                  <h1 className={'display-4 mb-4'}>Openfloor Services</h1>
                  <p className={'text-sm text-black-50'}>123</p>
                </div>
              </div>
              <div className="col-12 mx-auto">
                <div className="form-row">
                  <div className="col-6 col-lg-3 px-lg-2">
                    <article className="card mb-3 border-0">
                      <div className="card-body bg-white shadow-lg rounded px-4 py-5">
                        <i className="fab fa-github fa-3x mb-4"></i>
                        <h4 className="mb-2">워크플로우</h4>
                        <p>효율적인 업무방식</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-6 col-lg-3 px-lg-2">
                    <article className="card mb-3 border-0">
                      <div className="card-body bg-white shadow-lg rounded px-4 py-5">
                        <i className="fab fa-google-play fa-3x mb-4"></i>
                        <h4 className="mb-2">애플리케이션</h4>
                        <p>iOS, Android OK!</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-6 col-lg-3 px-lg-2">
                    <article className="card mb-3 border-0">
                      <div className="card-body bg-white shadow-lg rounded px-4 py-5">
                        <i className="fab fa-internet-explorer fa-3x mb-4"></i>
                        <h4 className="mb-2">크로스브라우징</h4>
                        <p>ie9까지 대응 완비</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-6 col-lg-3 px-lg-2">
                    <article className="card mb-3 border-0">
                      <div className="card-body bg-white shadow-lg rounded px-4 py-5">
                        <i className="fab fa-js-square fa-3x mb-4"></i>
                        <h4 className="mb-2">리소스관리</h4>
                        <p>빠른 유지보수/대응</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </article>
          </section> */}
          {/* email contact */}
          <section className="mx-md-0 mx-3">
            <article className="container p-5 p-lg-6 bg-white shadow-lg rounded">
              <div className="row d-flex align-items-center">
                {/* col */}
                <div className="col-12 col-md-8 pr-md-5 pb-md-0 pb-3">
                  <h2 className="font-weight-bold py-2">Hello, Stranger?</h2>
                  <p className="text-sm">
                    모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이
                    정하는 교육을 받게 할 의무를 진다.
                  </p>
                </div>
                {/* col */}
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
        </div>
      </Layout>
    )
  }
}

export default Index
