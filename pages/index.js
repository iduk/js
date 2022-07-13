import React, { useRef, useEffect, useState, useMemo } from "react"
import Layout from "../components/layout"
import ActiveLink from "../components/ActiveLink"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import { gsap, Power1, ScrollTrigger } from "gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import TextLoop from "react-text-loop"
import axios from "axios"
import posts from "../data/mock_data.json"
import Marquee from "react-fast-marquee"

gsap.registerPlugin(MotionPathPlugin)

const Logos = [
  { id: "logo1", img: "/img/logo-amazon.svg", name: "amazon" },
  { id: "logo2", img: "/img/logo-oliveyoung.svg", name: "oliveyoung" },
  { id: "logo3", img: "/img/logo-slack.svg", name: "slack" },
  { id: "logo4", img: "/img/logo-samsung.svg", name: "samsung" },
  { id: "logo5", img: "/img/logo-nodejs.svg", name: "nodejs" },
]

function useSelector() {
  const ref = useRef()
  const q = useMemo(() => gsap.utils.selector(ref), [ref])
  return [q, ref]
}

// index
function Index() {
  const [q, ref] = useSelector()
  const [showBox, setShowBox] = useState(true)

  const timeline = gsap.timeline({ yoyo: true })

  useEffect(() => {
    gsap.to("#emblem-svg", {
      duration: 10,
      rotation: 180,
      repeat: -1,
      ease: Power1.easeInOut,
    })
  }, [])

  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]

  const postsList = posts.slice(0, 4)

  return (
    <Layout title="Openfloor">
      {/* index page */}
      <div className="page-index" ref={ref}>
        {/* intro */}
        <section className="feature">
          <div className="feature--header">
            <article className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-12 text-gray">
                  {/* <p className="headline text-deco pb-4">Openfloor</p> */}
                  <p className="headline font-weight-normal">
                    We can create anything.
                  </p>
                  <p className="headline font-weight-normal">
                    with great great skill.
                  </p>
                  <p className="headline font-weight-normal d-md-block">
                    Feel free to make&nbsp;
                    <span className="font-weight-bold text-black">
                      <TextLoop mask={true}>
                        <span>#Multi-Platform</span>
                        <span>#Control Devices</span>
                        <span>#IoT System</span>
                        <span>#Troubleshoot</span>
                      </TextLoop>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="container-fluid">
          <ul className="row align-content-stretch">
            <li className="col-12 col-lg-12">
              <div className="section-bg rounded-lg">
                <div className="foreground">큰글자 옆으로 마퀴</div>
              </div>
            </li>
          </ul>
        </section>

        <section className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="centered text-center rounded-lg bg-light">
                <p className="h4 mb-4">What we do.</p>
                <p className="headline font-weight-normal">
                  <span className="badge badge-pill border m-1">
                    TroubleShooter
                  </span>
                  <span className="badge badge-pill border m-1">Team</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid py-6">
          <div className="d-flex justify-content-between align-items-baseline mb-3">
            <h1 className="headline">Performance</h1>
            <a href="#" className="flex-shrink-0">
              <img src="/img/right-up.svg" width={40} alt="more" />
            </a>
          </div>
          <ul className="dense-row items-list">
            {postsList.map((item) => (
              <li className="col-12 col-md-6 col-lg-3 item">
                <div className="contents mb-4 mb-lg-0">
                  <span className="thumb mb-1">
                    <img
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      src="https://images.unsplash.com/photo-1586953208270-767889fa9b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80 1920w, https://images.unsplash.com/photo-1586953208270-767889fa9b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80 640w"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </span>
                  <small className="badge badge-pill border my-2">
                    {item.skill}
                  </small>
                  <h4 className="subject">{item.title}</h4>
                  <p className="text-gray">{item.desc}</p>
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
