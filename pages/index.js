import React, { useRef } from "react"
import Layout from "../components/layout"
import "../components/styles/app.scss"
import ActiveLink from "../components/ActiveLink"

// index
function Index() {
  return (
    <Layout
      title="Openfloor"
      theme="bg-white"
      color="text-black"
      logo={"/img/symbol.svg"}
    >
      {/* index page */}
      <div className="index">
        {/* intro */}
        <section className="feature">
          <article className="container-fluid">
            <div className="row align-items-end justify-content-center">
              <div className="col-10 col-lg-12">
                <h1 className="typo-1">Openfloor Makes Quality</h1>
              </div>
            </div>
          </article>
        </section>
        {/* section1 */}
        <section className="partners">
          <ul className="logos">
            <li>
              <img src="/img/logo-amazon.svg" alt="Partners logo" />
            </li>
            <li>
              <img src="/img/logo-oliveyoung.svg" alt="Partners logo" />
            </li>
            <li>
              <img src="/img/logo-kia-motors.svg" alt="Partners logo" />
            </li>
            <li>
              <img src="/img/logo-coca-cola.svg" alt="Partners logo" />
            </li>
            <li>
              <img src="/img/logo-slack.svg" alt="Partners logo" />
            </li>
            <li>
              <img src="/img/logo-samsung.svg" alt="Partners logo" />
            </li>
            <li>
              <img src="/img/logo-nodejs.svg" alt="Partners logo" />
            </li>
            <li>
              <img src="/img/logo-oliveyoung.svg" alt="Partners logo" />
            </li>
          </ul>
        </section>
        <section className="container-fluid my-8">
          <div className="row align-items-center">
            <article className="col-12 col-md-6 px-0">
              <div className="wow fadeInLeft" data-wow-delay="0s">
                <img
                  src="https://source.unsplash.com/random/1200x800/?website"
                  alt="..."
                  className="img-fluid"
                />
              </div>
            </article>

            <article className="col-10 col-md-6">
              <div className="d-flex wow fadeInRight" data-wow-delay="0s">
                <div className="ml-lg-4">
                  <h3>Experience for Various Field</h3>
                  <p className="text-gray-700 mb-6">
                    다양한 분야의 경험을 바탕으로 "안정적인 업무 관리"
                  </p>
                </div>
              </div>
              <div className="d-flex wow fadeInRight" data-wow-delay="0.1s">
                <div className="ml-lg-4">
                  <h3>Team Work for Long Time</h3>
                  <p className="text-gray-700 mb-6">
                    오랜 기간 다져온 팀워크로 "효율적인 업무 진행"
                  </p>
                </div>
              </div>
              <div className="d-flex wow fadeInRight" data-wow-delay="0.2s">
                <div className="ml-lg-4">
                  <h3>Communication for High Value</h3>
                  <p className="text-gray-700 mb-0">
                    높은 가치 실현을 위한 커뮤니케이션으로 "심도있는 업무 분석"
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* section2 */}
        <section className="container-fluid" data-wow-delay="0s">
          <div className="row align-items-center">
            <article className="col col-12 d-flex align-items-center">
              <h1>옵흔프흘로허</h1>
              <h1>옵흔프흘로허</h1>
              <h1>옵흔프흘로허</h1>
            </article>
          </div>
        </section>
        {/* abcdef */}
        <section className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h1 className="typo">Performance 언제나</h1>
            </div>
            <div className="col-12 col-lg-4">
              <h1 className="typo">Performance 쌉가능</h1>
            </div>
            <div className="col-12 col-lg-4">
              <h1 className="typo">Performance 하하하</h1>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Index
