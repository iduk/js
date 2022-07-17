import React, { useRef, useEffect, useState, useMemo } from "react"
import Layout from "../components/layout"
import ActiveLink from "../components/ActiveLink"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import TextLoop from "react-text-loop"
import axios from "axios"
import posts from "../data/mock_data.json"
import Marquee from "react-fast-marquee"
import { gsap, Power1, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
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
  const postsList = posts.slice(0, 4)

  useEffect(() => {
    // gsap scrollTrigger
    gsap.utils.toArray(".page-index").forEach((section) => {
      const elems = section.querySelectorAll("section")

      gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "Power2.linear",
        overwrite: "auto",
      })

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 10%",
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
    <Layout title="Openfloor">
      {/* index page */}
      <div className="page-index">
        {/* intro */}
        <section className="feature">
          <div className="container">
            <div className="feature--header">
              {/* 1 */}
              <div>
                <p className="h5 text-uppercase">Award 2023</p>
                <p className="headline text-uppercase">
                  OPENFLOOR’s Webb Space Telescope Reveals Astounding,
                  Unprecedented Views of the Universe
                </p>
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

        {/* image list */}
        <section className="container-fluid my-4">
          <ul className="row align-content-stretch">
            <li className="col-12 col-lg-12">
              <div className="section-bg mask">
                <div className="foreground text-center">
                  <p className="text-outline">Openfloor Openfloor</p>
                  <p className="text-fill">Openfloor</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="container-fluid my-4">
          <article className="row no-gutters">
            <div className="col-12 col-lg-4">
              <div className="p-4 mask bg-black text-white">
                <p className="h4">what we work.</p>
                <div
                  className="display-2 d-flex align-items-center"
                  style={{ height: "35vh" }}
                >
                  <p className="display-2 text-center py-3">
                    <span className="badge badge-pill border m-1">
                      Technology
                    </span>
                    <span className="badge badge-pill border m-1">
                      Innovation
                    </span>
                    <span className="badge badge-pill border m-1">
                      Affection
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="p-4 mask bg-black text-white">
                <p className="h4">what we work.</p>
                <div
                  className="display-2 text-center d-flex align-items-center justify-content-center"
                  style={{ height: "35vh" }}
                >
                  <p className="display-2 text-center py-3">
                    <span className="badge badge-pill  border m-1">
                      Technology
                    </span>
                    <span className="badge badge-pill border m-1">
                      Innovation
                    </span>
                    <span className="badge badge-pill border m-1">
                      Affection
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="p-4 mask bg-black text-white">
                <p className="h4">what we work.</p>
                <div
                  className="display-2 text-center d-flex align-items-center justify-content-center"
                  style={{ height: "35vh" }}
                >
                  <p className="display-2 text-center py-3">
                    <span className="badge badge-pill  border m-1">
                      Technology
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="container py-8">
          <header className="d-flex justify-content-between align-items-baseline mb-4 ">
            <h1 className="headline">Performance</h1>
          </header>

          <ul className="row items-list">
            {postsList.map((item) => (
              <li key={item.index} className="col-12 col-md-6 col-lg-3 item">
                <div className="contents mb-4 mb-lg-0">
                  <span className="thumb mask mb-3">
                    <img
                      src="https://picsum.photos/480/640?random"
                      width={480}
                      height={640}
                      className="img-fluid"
                      alt=""
                    />
                  </span>
                  <h4 className="subject">{item.title}</h4>
                  <p>{item.desc}</p>
                  <small className="mt-4">#{item.skill}</small>
                </div>
              </li>
            ))}
          </ul>
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
