import React, { useRef, useEffect, useState, useMemo } from "react"
import Layout from "../components/layout"
import Link from "next/link"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import TextLoop from "react-text-loop"
import axios from "axios"
import posts from "../data/mock_data.json"
import Marquee from "react-fast-marquee"
import { gsap, Power1, Power2, TimelineMax } from "gsap"
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

// index
function Index() {
  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
  const postsList = posts.slice(0, 3)

  useEffect(() => {
    //
    //
    //
    //
    // gsap scrollTrigger
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
              <div className="py-2">
                <h5>© New OPENFLOOR 2023 </h5>
              </div>
              {/* \\ */}
            </div>
          </div>
        </section>

        {/* section */}
        <section className="container-fluid bg-danger text-white background">
          {/* img transition */}
          <div className="foreground">
            <div className="row justify-content-end">
              <div className="col-8 col-lg-5 px-0">
                <ul className="film h-100 d-flex gap-2 gap-lg-4 img-blend">
                  <li className="slide1 d-flex flex-column gap-2 gap-lg-4">
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
                  </li>
                  <li className="slide2 d-flex flex-column gap-2 gap-lg-4">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* \\.img */}
          <div className="container flim-trigger">
            <div className="row flex-wrap">
              <div className="col-12 col-md-10 col-lg-9 vh-half">
                <div className="py-6 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <h1 className="display-0 mb-4">Dev</h1>
                    <h5>Give your product team a unique marketing tool.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <div className="d-flex gap-lg-3 gap-2 flex-wrap display-3 pt-6">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* intro */}
        <section className="position-relative">
          {/* back */}
          <div className="container-fluid">
            <article className="row grid-outline flex-wrap">
              <div
                className="col-8 col-lg-2 vh-half background"
                style={{
                  backgroundImage: "url(http://placebeard.it/600/800)",
                }}
              ></div>
              <div
                className="col-4 col-lg-4 vh-half background"
                style={{
                  backgroundImage: "url(http://placebeard.it/600/800)",
                }}
              ></div>
              <div className="col-12 col-lg-6 vh-half">
                <div className="p-lg-5 py-4 d-flex flex-column justify-content-between">
                  <h1 className="display-2 pb-4">
                    People with similar interests and goals come together to
                    change the world for the better.
                  </h1>
                  <div>
                    <p>
                      시들어 무엇을 기관과 싶이 얼음과 봄바람이다. 가진 타오르고
                      속잎나고, 힘차게 과실이 것이다. 원대하고, 미묘한 가는 피가
                      아니다. 목숨이 것은 보이는 피에 착목한는 청춘을 너의 보라.
                      끝에 거친 우리 방황하여도, 찬미를 만천하의 무엇을 밥을
                      기관과 사막이다.
                    </p>
                    <p className="mt-4">
                      못하다 끝까지 끓는 안고, 두기 그들의 쓸쓸한 투명하되
                      것이다. 이것이야말로 미묘한 얼음 그것을 관현악이며, 생명을
                      이것을 속잎나고, 말이다. 보이는 피어나는 뭇 싶이 칼이다.
                      이상, 영락과 것은 보라. 충분히 이 너의 풀이 찬미를 실현에
                      안고, 고행을 하였으며, 사막이다.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* card section */}
        {/* <section className="container-fluid py-6">
          <article className="row">
            <div className="col-12 col-md-12 col-lg-7 mx-auto">
              <article className="row no-gutters">
                <div className="col-12 col-md-4">
                  <div className="p-4 mask bg-primary text-white">
                    <p className="h4 text-uppercase">Openfloor</p>
                    <div
                      className="d-flex flex-column justify-content-between"
                      style={{ height: "50vh" }}
                    >
                      <p className="display-2">오픈플로어</p>
                      <p>
                        못하다 끝까지 끓는 안고, 두기 그들의 쓸쓸한 투명하되
                        것이다. 이것이야말로 미묘한 얼음 그것을 관현악이며,
                        생명을 이것을 속잎나고, 말이다. 보이는 피어나는 뭇 싶이
                        칼이다. 이상, 영락과 것은 보라.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <div className="p-4 mask bg-secondary text-white">
                    <p className="h4">what we work.</p>
                    <div
                      className="display-2 d-flex align-items-end"
                      style={{ height: "50vh" }}
                    >
                      <p className="display-3">
                        <span className="badge badge-pill border border-white m-1">
                          Technology
                        </span>
                        <span className="badge badge-pill border border-white m-1">
                          Innovation
                        </span>
                        <span className="badge badge-pill border border-white m-1">
                          Affection
                        </span>
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </section> */}

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
