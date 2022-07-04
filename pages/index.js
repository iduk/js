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
  }, [])

  return (
    <Layout title="Openfloor">
      {/* index page */}
      <div className="index">
        {/* intro */}
        <section className="feature">
          <article className="container">
            <div className="row align-items-end justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="typo-list" ref={ref}>
                  <h1 className="display-1">Openfloor</h1>
                  <h1 className="display-1">Makes</h1>
                  <h1 className="display-1">Quality</h1>
                </div>
              </div>

              {/* l */}
              <div className="col-12 col-lg-4 bg-danger">
                <div className="typo-list" ref={ref}>
                  <h1 className="display-1">Openfloor</h1>
                  <h1 className="display-1">Plans☞↘︎</h1>
                </div>
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
      </div>
    </Layout>
  )
}

export default Index
