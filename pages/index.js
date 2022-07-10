import React, { useRef, useEffect, useState, useMemo } from "react"
import Layout from "../components/layout"
import ActiveLink from "../components/ActiveLink"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import { gsap, Power1, ScrollTrigger } from "gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import TextLoop from "react-text-loop"

import axios from "axios"
import posts from "../data/mock_data.json"

gsap.registerPlugin(MotionPathPlugin)

const Logos = [
  { id: "logo1", img: "/img/logo-amazon.svg", name: "amazon" },
  { id: "logo2", img: "/img/logo-oliveyoung.svg", name: "oliveyoung" },
  { id: "logo3", img: "/img/logo-slack.svg", name: "slack" },
  { id: "logo4", img: "/img/logo-samsung.svg", name: "samsung" },
  { id: "logo5", img: "/img/logo-nodejs.svg", name: "nodejs" },
]

const imglist = [
  { Img: "https://source.unsplash.com/XkKCui44iM0" },
  { Img: "https://source.unsplash.com/zSpGWzwRFas" },
  { Img: "https://source.unsplash.com/XkKCui44iM0" },
  { Img: "https://source.unsplash.com/zSpGWzwRFas" },
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

  const remove = () => {
    gsap.to(boxRef.current, {
      opacity: 0,
      onComplete: () => setShowBox(false),
    })
  }

  useEffect(() => {
    // timeline
    //   .fromTo(
    //     q(".img-list"),
    //     {
    //       stagger: 0.2,
    //       xPercent: 0,
    //       ease: "linear",
    //     },
    //     { duration: 50, xPercent: -100, repeat: -1 }
    //   )
    //   .totalProgress(0.5)

    gsap.to("#logo-svg", {
      duration: 1,
      rotation: 360,
      repeat: -1,
      ease: "linear",
    })

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
      <div className="index" ref={ref}>
        {/* intro */}
        <section className="feature">
          <div className="feature--header">
            <article className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <p className="headline text-deco pb-4">Openfloor</p>
                  <p className="headline">
                    We can create anything with a variety of techniques.
                  </p>
                  <div className="headline pt-4 pt-lg-0">
                    <p className="d-lg-inline d-block mr-lg-3">
                      Feel free to make
                    </p>
                    <p className="bg-black text-light px-3 rounded-pill d-lg-inline-block d-md-block">
                      <TextLoop mask={true}>
                        <span className="font-weight-bolder">
                          Multi-Platform
                        </span>
                        <span className="font-weight-bolder">
                          Device Control
                        </span>
                        <span className="font-weight-bolder">IoT Service</span>
                      </TextLoop>
                      <span>.</span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="container-fluid">
          <ul className="row align-content-stretch img-list">
            <li
              className="col-12 col-lg-12"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1647706531331-665b055c5a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)",
              }}
            >
              <div className="h-100 d-flex flex-column justify-content-center">
                <div class="text-marquee">
                  <div class="text-marquee--inner" aria-hidden="true">
                    <span>Openfloor</span>
                    <span>Openfloor</span>
                    <span>Openfloor</span>
                    <span>Openfloor</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="container-fluid my-8">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="centered text-center rounded bg-light">
                <p className="display-1 mb-4">Device Handling</p>
                <p className="h1 font-weight-normal">
                  <span className="badge badge-pill border mx-1">
                    Multi-Platform
                  </span>
                  <span className="badge badge-pill border mx-1">
                    Device Control
                  </span>
                  <span className="badge badge-pill border mx-1">
                    IoT Service
                  </span>
                  <span className="badge badge-pill border mx-1">...</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid py-8">
          <h1 className="headline mb-3">We are made up of a diverse team.</h1>
          <ul className="row">
            {postsList.map((item) => (
              <li className="col-12 col-lg-3">
                <img
                  src="https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
                  className="img-fluid rounded mb-4"
                  alt=""
                />
                <div>
                  <span className="badge badge-pill border mb-2">
                    {item.skill}
                  </span>
                  <h4>{item.title}</h4>
                  <p className="text-gray">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Clients Logo */}
        <section className="container-fluid">
          <div className="slide-wrap border rounded">
            <ul className="logos">
              {Logos.map((logo) => (
                <li key={logo.id}>
                  <img src={logo.img} alt={logo.name} />
                </li>
              ))}
              {Logos.map((logo) => (
                <li key={logo.id}>
                  <img src={logo.img} alt={logo.name} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Index
