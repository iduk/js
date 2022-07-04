import React, { useEffect } from "react"
import Layout from "../components/layout"
import "../components/styles/app.scss"
import ActiveLink from "../components/ActiveLink"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

const Logos = [
  { id: "logo1", img: "/img/logo-amazon.svg", name: "amazon" },
  { id: "logo2", img: "/img/logo-oliveyoung.svg", name: "oliveyoung" },
  { id: "logo3", img: "/img/logo-kia-motors.svg", name: "kia-motors" },
  { id: "logo4", img: "/img/logo-slack.svg", name: "slack" },
  { id: "logo5", img: "/img/logo-samsung.svg", name: "samsung" },
  { id: "logo6", img: "/img/logo-nodejs.svg", name: "nodejs" },
]

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
              <div className="col-12 col-lg-12">
                <h1 className="typo-1">Openfloor Makes Quality</h1>
                <h1 className="typo-1">원하는대로</h1>
                <h1 className="typo-1">무엇이든물어보세요</h1>
              </div>
            </div>
          </article>
        </section>
        {/* section1 */}
        <section className="partners">
          <ul className="logos">
            {Logos.map((logo) => (
              <li key={logo.id}>
                <img src={logo.img} alt={logo.name} />
              </li>
            ))}
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
              <div className="d-flex wow fadeInRight" data-wow-delay="0.2s">
                <div className="ml-lg-4">
                  <h3 className="typo">Experience</h3>
                  <p className="text-gray-700">
                    다양한 분야의 경험을 바탕으로 "안정적인 업무 관리"
                  </p>
                </div>
              </div>
              <div className="d-flex wow fadeInRight" data-wow-delay="0.3s">
                <div className="ml-lg-4">
                  <h3 className="typo">TeamWork</h3>
                  <p className="text-gray-700">
                    오랜 기간 다져온 팀워크로 "효율적인 업무 진행"
                  </p>
                </div>
              </div>
              <div className="d-flex wow fadeInRight" data-wow-delay="0.4s">
                <div className="ml-lg-4">
                  <h3 className="typo">Communication</h3>
                  <p className="text-gray-700">
                    높은 가치 실현을 위한 커뮤니케이션으로 "심도있는 업무 분석"
                  </p>
                </div>
              </div>
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
