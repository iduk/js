import React, { useRef, useEffect, useState, useMemo } from "react"
import Layout from "../components/layout"
import "../components/styles/app.scss"
import ActiveLink from "../components/ActiveLink"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

import { gsap, Power1, Power2, Power3, Power4 } from "gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import { Power0 } from "gsap/dist/gsap"

gsap.registerPlugin(MotionPathPlugin)

const Logos = [
  { id: "logo1", img: "/img/logo-amazon.svg", name: "amazon" },
  { id: "logo2", img: "/img/logo-oliveyoung.svg", name: "oliveyoung" },
  { id: "logo3", img: "/img/logo-kia-motors.svg", name: "kia-motors" },
  { id: "logo4", img: "/img/logo-slack.svg", name: "slack" },
  { id: "logo5", img: "/img/logo-samsung.svg", name: "samsung" },
  { id: "logo6", img: "/img/logo-nodejs.svg", name: "nodejs" },
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
    // gsap.to(q(".typo-1"), {
    //   x: 200,
    //   stagger: 0.2,
    // })

    gsap.to("#logo-svg", {
      duration: 1,
      rotation: 360,
      repeat: 3,
      ease: Power0.easeIn,
    })

    gsap.to("#emblem-svg", {
      duration: 20,
      rotation: 360,
      repeat: -1,
      ease: Power0.easeIn,
    })
  }, [])

  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]

  return (
    <Layout title="Openfloor">
      {/* index page */}
      <div className="index">
        {/* intro */}
        <section className="feature">
          <article className="feature--header">
            <div className="container position-relative">
              <div className="emblem-wrap">
                <svg id="emblem-svg" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="emblem-circle"
                      d="M 50, 50
                      m -37, 0
                      a 37,37 0 1,1 74,0
                      a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text>
                    <textPath xlinkHref="#emblem-circle">
                      Openfloor Makes Quality
                    </textPath>
                  </text>
                </svg>
              </div>

              <p className="headline">202X New Origin</p>
              <p className="headline text-light">Performance Team</p>
            </div>
          </article>

          <article className="feature--content pb-6">
            <div className="container">
              <div className="row justify-content-between align-items-start">
                <div className="col-12 col-lg-3">
                  <div className="boxing">
                    <p className="h5">&#60;Intro &#47;&#62;</p>
                    <p className="mb-4 mb-lg-0">
                      OpenFloor <br />
                      Makes Quality
                    </p>
                  </div>
                </div>

                <div className="col-12 col-lg-9">
                  <div className="boxing">
                    <h5>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Clients Logo */}
        <section className="slide-wrap border-top border-black">
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
        </section>

        <section className="bg-light py-8" style={{ minHeight: "90vh" }}>
          <div className="container">
            <div className="row">
              <article className="col-12 col-lg-3">
                <div className="boxing">
                  <p className="h5">&#60;Intro &#47;&#62;</p>
                  <p className="mb-4 mb-lg-0">
                    OpenFloor <br />
                    Makes Quality
                  </p>
                </div>
              </article>

              <article className="col-12 col-lg-9">
                <div className="boxing">
                  <ul>
                    <li className="d-flex justify-content-between">
                      <div className="w-80">
                        <h4>consectetuer adipiscing elit.</h4>
                        <small className="mt-2">Date. 1988-10-19</small>
                        <p className="small">
                          Nullam quis ante. Etiam sit amet orci eget eros
                          faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                          amet nibh. Donec sodales sagittis magna. Sed
                          consequat, leo eget bibendum sodales, augue velit
                          cursus nunc,
                        </p>
                      </div>
                      <img
                        src="https://source.unsplash.com/random/280x200"
                        alt=""
                        className="img-fluid"
                      />
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Index
