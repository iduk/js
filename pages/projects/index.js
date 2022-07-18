import React, { useRouter, useState, useEffect } from "react"
import Link from "next/link"
import Layout from "../../components/layout"
import { gsap, Power1, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import ProjectList from "./ProjectList"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [visible, setVisible] = useState(null)
  const handleToggle = (index) => {
    if (visible === index) {
      return setVisible(null)
    }
    setVisible(index)
  }

  useEffect(() => {
    // gsap scrollTrigger
    gsap.utils.toArray(".post-list").forEach((layer) => {
      const elems = layer.querySelectorAll("li")

      gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "Power2.linear",
        overwrite: "auto",
      })

      ScrollTrigger.create({
        trigger: ".section-wrapper",
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
    <Layout title="Projects" theme="projects">
      <div className="container-fluid">
        <article className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <h1 className="display-1 text-uppercase">Projects</h1>
            <div className="section-wrapper mt-6">
              <ProjectList />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Projects
