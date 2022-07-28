import React, { useRef, useEffect, useState, useMemo } from "react"
import Layout from "../components/layout"
import Link from "next/link"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import TextLoop from "react-text-loop"
import axios from "axios"
import posts from "../data/mock_data.json"
import Marquee from "react-fast-marquee"
import { gsap, Power0, Power1, Power2, TimelineMax } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(TimelineMax)
gsap.registerPlugin(ScrollTrigger)

const Logos = [
  { id: "logo1", img: "/img/logo-amazon.svg", name: "amazon" },
  { id: "logo2", img: "/img/logo-oliveyoung.svg", name: "oliveyoung" },
  { id: "logo3", img: "/img/logo-slack.svg", name: "slack" },
  { id: "logo4", img: "/img/logo-samsung.svg", name: "samsung" },
  { id: "logo5", img: "/img/logo-nodejs.svg", name: "nodejs" },
]

const textloop1 = [
  "openfloor",
  "Service",
  "development",
  "uxui",
  "troubleshoot",
  "business",
  "performance",
]
const textloop2 = ["Xenon", "Park", "Lim", "Song", "iDuk", "Norazo", "kim"]

// index
function Index() {
  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
  const postsList = posts.slice(0, 3)

  useEffect(() => {
    // text animation
    const textItems = document.querySelectorAll("#scrollingText li")
    const word1 = document.querySelectorAll(".move1 span")
    const word2 = document.querySelectorAll(".move2 span")
    const random1 = word1[Math.floor(Math.random() * word1.length)]
    const random2 = word2[Math.floor(Math.random() * word2.length)]
    const targetEl = [random1, random2]
    let tl1 = gsap.timeline()
    let tl2 = gsap.timeline()

    gsap.utils.toArray(targetEl).forEach((text, i) => {
      gsap.set(text, {
        ease: "linear",
      }),
        gsap.to(text, {
          scrollTrigger: {
            trigger: text,
            scrub: i * 0.2,
            toggleClass: { targets: text, className: "active" },
            toggleActions: [],
          },
          // onToggle: (self) => console.log("toggled to active:", isActive),
        })
    })
    gsap.utils.toArray(".move1").forEach((text, i) => {
      gsap.set(text, {
        alpha: 0,
        ease: "linear",
      }),
        gsap.to(text, {
          scrollTrigger: {
            // start: "top center",
            // end: "+=500",
            trigger: text,
            scrub: i * 0.2,
          },
          x: 500,
          alpha: 0.4,
        })
    })
    gsap.utils.toArray(".move2").forEach((text, i) => {
      gsap.set(text, {
        alpha: 0,
      }),
        gsap.to(text, {
          scrollTrigger: {
            // start: "top center",
            // end: "+=500",
            trigger: text,
            scrub: i * 0.2,
          },
          x: -500,
          alpha: 0.4,
        })
    })

    // page scroll
    gsap.utils.toArray(".page--index").forEach((section) => {
      const elems = section.querySelectorAll("section")

      gsap.set(elems, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: Power2,
        overwrite: "auto",
      })

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        yoyo: true,
        markers: false,
        pin: false,

        onEnter: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
          }),
        onLeave: () =>
          gsap.to(elems, {
            y: -100,
            opacity: 0,
            stagger: 0.15,
          }),
        onEnterBack: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: -0.15,
          }),
        onLeaveBack: () =>
          gsap.to(elems, {
            y: 100,
            opacity: 0,
            stagger: -0.15,
          }),
      })
    })

    // number counter
    const countEl = document.querySelectorAll(".count")
    gsap.from(countEl, {
      textContent: 0,
      duration: 2,
      ease: Power1.easeIn,
      snap: { textContent: 1 },
      stagger: 0.6,
      // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      scrollTrigger: {
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top",
      },
    })
  }, [])

  return (
    <Layout theme={"index"}>
      {/* index page */}
      <div>
        {/* feature */}
        <section className="container">
          <div className="feature">
            <div className="feature--header">
              {/* <p className="h5 text-uppercase">Award 2023</p> */}
              <div className="headline text-uppercase">
                <Link href="/">
                  <a>OPENFLOOR</a>
                </Link>
                <Link href="/">
                  <a>Multi-Platform</a>
                </Link>
                <Link href="/">
                  <a>Data to Information</a>
                </Link>
                <Link href="/">
                  <a>Device Handling</a>
                </Link>
                <Link href="/">
                  <a>Everyday Coding</a>
                </Link>
              </div>
              {/* \\ */}

              {/* 2 */}
              <div className="pt-6">
                <h5>© New OPENFLOOR 2023 </h5>
              </div>
              {/* \\ */}
            </div>
          </div>
        </section>

        {/* we work */}
        <section className="section1 bg-danger text-white background py-8">
          {/* img transition */}
          <div className="foreground flim-trigger">
            <div className="container-fluid">
              <div className="row justify-content-end">
                <div className="col-12 d-lg-none vh-50"></div>
                <div className="col-12 col-lg-6 px-0 overflow-hidden vh-half">
                  <ul className="film d-flex justify-content-center gap-2 gap-lg-3">
                    <li className="slide1 d-flex flex-column gap-2 gap-lg-3 img-blend">
                      <img
                        src="https://source.unsplash.com/800x590/?coding"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x480/?app"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x800/?coding"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x480/?app"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x500/?design"
                        alt="Project Image"
                        className="img-fluid"
                      />
                    </li>
                    <li className="slide2 d-flex flex-column gap-2 gap-lg-3 img-blend">
                      <img
                        src="https://source.unsplash.com/800x500/?startup"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x450/?technical"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x800/?office"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x650/?mobile"
                        alt="Project Image"
                        className="img-fluid"
                      />
                      <img
                        src="https://source.unsplash.com/800x450/?technical"
                        alt="Project Image"
                        className="img-fluid"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* \\.img */}
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 vh-half d-flex flex-column justify-content-lg-between overflow-hidden">
                <div>
                  <h1 className="display-0">We work</h1>
                  <h5 className="mt-4">커리어의 기회를 만들어주는곳</h5>
                  <p>
                    오픈플로어는 수천개의 채용공고 및 아웃소싱 프로젝트 경험을
                    통해 데이터 기반 인공지능 기술을 연구하고, 이를 활용한 응용
                    서비스 및 솔루션을 개발합니다. 기술에 대한 이해를 기반으로,
                    다양한 비즈니스 영역의 데이터를 만나는 것을 환영합니다.
                  </p>
                </div>
                <div className="d-flex gap-lg-2 gap-2 flex-wrap h3 pt-6">
                  <span className="badge rounded-pill border px-3 py-1 border-white">
                    ConsultingDigital
                  </span>
                  <span className="badge rounded-pill border px-3 py-1 border-white">
                    Transformation
                  </span>
                  <span className="badge rounded-pill border px-3 py-1 border-white">
                    Strategy
                  </span>
                  <span className="badge rounded-pill border px-3 py-1 border-white">
                    WebApp
                  </span>
                  <span className="badge rounded-pill border px-3 py-1 border-white">
                    Platform
                  </span>
                  <span className="badge rounded-pill border px-3 py-1 border-white">
                    ServiceMind
                  </span>
                  <span className="badge rounded-pill border px-3 py-1 border-white">
                    technology
                  </span>
                </div>
              </div>
              <div className="col-12 d-lg-none vh-30"></div>
            </div>
          </div>
        </section>

        {/* we service */}
        <section
          id="scrollingText"
          className="section2 vh-half position-relative bg-black text-primary py-8"
        >
          {/* text bg */}
          <div className="foreground d-flex flex-column justify-content-lg-center">
            <ul className="text-list">
              <li className="move1">
                {textloop1.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
              <li className="move2">
                {textloop2.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
              <li className="move1">
                {textloop1.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
              <li className="move2">
                {textloop2.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
              <li className="move1">
                {textloop1.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
              <li className="move2">
                {textloop2.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
              <li className="move1">
                {textloop1.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
              <li className="move2">
                {textloop2.map((item, index) => (
                  <span key={index} className="text-outline" key={index}>
                    {item}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div className="container">
            <article className="row vh-half">
              <div className="col-12 col-lg-12">
                <h1 className="display-0">We Service</h1>
              </div>

              <div className="col-12 col-lg-6">
                <h5>더 유연하고 더 효율적인 소프트웨어를 개발하는 개인과 팀</h5>
              </div>
              <div className="col-12 col-lg-6 mt-lg-0 mt-6">
                <p>
                  작은 개인이 한계를 넘어 다양성의 가치를 인정받고, 개개인의
                  성공들이 모여 우리 경제에 분수 효과를 가져오기를 기대합니다.
                  수년간의 경험을 바탕으로 스틸 촬영에서 설치에 이르기까지 모든
                  것을 제작했습니다. 우리 팀이 처리할 수 없는 너무 크거나 작은
                  작업은 없습니다.
                </p>
              </div>

              <div className="col-12 col-lg-12 my-4 my-lg-0">
                <ul className="imagebox row g-lg-4 g-2">
                  <li className="col-6 col-md-6 col-lg-3">
                    <Link href={"#"}>
                      <a className="imagebox--item mask">
                        <figure
                          style={{
                            backgroundImage:
                              "url(https://source.unsplash.com/400x500/?teams)",
                          }}
                        ></figure>
                        <div className="subject">
                          <div>
                            <h4>Platform</h4>
                            <span>
                              거친 인생의 끓는 이상은 거선의 우리의 보라.
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="col-6 col-md-6 col-lg-3">
                    <Link href={"#"}>
                      <a className="imagebox--item mask">
                        <figure
                          style={{
                            backgroundImage:
                              "url(https://source.unsplash.com/400x500/?programming)",
                          }}
                        ></figure>
                        <div className="subject">
                          <div>
                            <h4>Programming</h4>
                            <span>
                              거친 인생의 끓는 이상은 거선의 우리의 보라.
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="col-6 col-md-6 col-lg-3">
                    <Link href={"#"}>
                      <a className="imagebox--item mask">
                        <figure
                          style={{
                            backgroundImage:
                              "url(https://source.unsplash.com/400x500/?design)",
                          }}
                        ></figure>
                        <div className="subject">
                          <div>
                            <h4>UX/UI</h4>
                            <span>
                              거친 인생의 끓는 이상은 거선의 우리의 보라.
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="col-6 col-md-6 col-lg-3">
                    <Link href={"#"}>
                      <a className="imagebox--item mask">
                        <figure
                          style={{
                            backgroundImage:
                              "url(https://source.unsplash.com/400x500/?data)",
                          }}
                        ></figure>
                        <div className="subject">
                          <div>
                            <h4>data lab</h4>
                            <span>
                              거친 인생의 끓는 이상은 거선의 우리의 보라.
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* we ... */}
        <section className="section3 vh-half position-relative py-8">
          <div className="container">
            <article className="row vh-half justify-content-lg-between">
              <div className="col-12 col-lg-12">
                <h1 className="display-0">We ability</h1>
              </div>

              <div className="col-12 col-lg-6">
                <h5>비전과 목표에 대한 내용</h5>
                <p>
                  청춘을 청춘의 설레는 예수는 천고에 이상이 같은 부패를 열락의
                  약동하다. 청춘의 그들을 용감하고 넣는 피가 열락의 실로 것이다.
                  그것을 속잎나고, 그러므로 얼마나 맺어, 남는 때문이다.
                  하였으며, 구할 찬미를 그들의 새 보배를 있는가? 커다란 인간이
                  무엇이 길을 것은 얼마나 것이다. 인생을 살 그것을 얼음 거친
                  인생의 과실이 있다. 오아이스도 보배를 내려온 대중을 더운지라
                  오직 이상 공자는 청춘의 아니다.
                </p>
              </div>
              {/* performance */}
              <div className="col-12 col-lg-6 offset-lg-5 mt-lg-0 mt-4">
                <article className="row">
                  <div className="col-6 col-lg-6">
                    <div className="py-4">
                      <h6>서비스 만족도</h6>
                      <h1 className="display-0">
                        <span className="count">992</span>
                      </h1>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6">
                    <div className="py-4">
                      <h6>작년대비 매출</h6>
                      <h1 className="display-0">
                        <span className="">200</span>
                      </h1>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6">
                    <div className="py-4">
                      <h6>총 구성원</h6>
                      <h1 className="display-0">
                        <span className="count">164</span>
                      </h1>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6">
                    <div className="py-4">
                      <h6>목표구성원</h6>
                      <h1 className="display-0">
                        <span className="count">201</span>
                      </h1>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </div>
        </section>

        {/* Clients Logo */}
        <section className="container-fluid">
          <div className="slide-wrap">
            <Marquee gradient={false} speed={30} direction={"right"}>
              <ul className="logos">
                {Logos.map((logo) => (
                  <li key={logo.id}>
                    <img src={logo.img} alt={logo.name} />
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Index
