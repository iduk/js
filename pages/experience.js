import React, { useState, useEffect } from "react"
import Link from "next/link"
import Layout from "../components/layout"
import axios from "axios"
import posts from "../data/mock_data.json"
import { gsap, Power1, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const [visible, setVisible] = useState(null)

  const handleToggle = (index) => {
    if (visible === index) {
      return setVisible(null)
    }
    setVisible(index)
  }

  useEffect(() => {
    gsap.utils.toArray(".page--experience").forEach((section) => {
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
    <Layout theme="experience">
      <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <div className="subpage-header">
              <h1 className="display-1">Experience</h1>
            </div>
            <section className="mt-6">
              <article className="row no-gutters justify-content-between">
                <div className="col-6 col-lg-2 pb-4">
                  <h5 className="">Since</h5>
                  <p>2007/05/24</p>
                </div>
                <div className="col-6 col-lg-2 pb-4">
                  <h5 className="">Tech Stack</h5>
                  <p>Branding, Trend Forecasting, IoT/AoT</p>
                </div>
                <div className="col-12 col-lg-6 pb-4">
                  <h5 className="">What we do</h5>
                  <p>
                    급속도로 성장해나가고 있는 서비스를 밀착해서 지원하는
                    경영지원 업무는 루틴한 업무의 반복이 아니라 매순간의
                    창의성과 순발력을 필요로하는 업무입니다 언제나 새로움과
                    재미를 만나 팀과 함께 지속가능한 성장이 이루어지도록
                  </p>
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>

      <section className="container-fluid border-top py-8">
        <article className="row justify-content-center">
          <div className="col-12 col-lg-7">
            {/* Goal */}
            <h6 className="">Goal Oriented</h6>
            <article className="row no-gutters justify-content-between">
              <div className="col-12 col-lg-3">
                <h2 className="pb-3 pb-lg-0">
                  Trend Forecasting, <br />
                  IT Industry Inc.
                </h2>
              </div>
              <div className="col-12 col-lg-6">
                <p>
                  사내공모제도 (Open Career Chance: OCC) 회사 내 다른 조직의
                  업무에 도전할 수 있는 기회를 열어 두고 있습니다. 개인에게는
                  새로운 커리어를 찾아 성장할 기회가, 회사로서는 새로운 시너지를
                  내는 기회가 됩니다. 충원이 필요한 조직이 모집 공고를 내면
                  지원자는 익명으로 서류 심사 및 면접을 통해 조직을 이동할 수
                  있습니다.
                </p>
              </div>
            </article>
          </div>
        </article>
      </section>

      <section className="container-fluid border-top py-8">
        <article className="row justify-content-center">
          {/* main column */}
          <div className="col-12 col-lg-7">
            {/* Role */}
            <h6 className="">Build Up</h6>
            <article className="row no-gutters justify-content-between">
              <div className="col-12 col-lg-3">
                <h2 className="pb-3 pb-lg-0">
                  Fly me to the moon, Let me play among the stars
                </h2>
              </div>
              <div className="col-12 col-lg-6">
                <ul className="data-list">
                  {list.map((item) => (
                    <li key={item.id} className="row no-gutters">
                      <p className="col-3 col-lg-2">{item.date}</p>
                      <div className="col-9 col-lg-10 px-0 px-lg-auto text-md">
                        <p>{item.content1}</p>
                        <p>{item.content2}</p>
                        <p>{item.content3}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
          {/* \\ main column */}
        </article>
      </section>

      <section className="container-fluid border-top py-8">
        <article className="row justify-content-center">
          {/* main column */}
          <div className="col-12 col-lg-7">
            {/* Careers */}
            <h1 className="display-1">Careers</h1>
            <ul className={"dropdown-wrap"}>
              {careers.map((item, index) => (
                <li
                  key={index}
                  className={`row no-gutters align-items-baseline py-1 py-lg-3 ${
                    visible === index ? "open" : ""
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="col-10 col-lg-6">
                    <p>{item.title}</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <p>{item.position}</p>

                    <div className="dropdown-content">
                      <dl className="detail m-0">
                        <dt className="pt-1">주요업무</dt>
                        <dd>Java Spring Boot 기반 Restful API 설계</dd>
                        <dd>
                          mybatis 및 MS-SQL 쿼리/프로시저 개발 및 연동 경험
                        </dd>
                        <dd>서버개발 및 운영(DevOps)</dd>
                      </dl>

                      <hr />

                      <dl className="detail m-0">
                        <dt className="pt-1">우대사항</dt>
                        <dd>
                          구현과 문제 해결을 위한 다양한 고민과 R&D를 함께
                          수행하실 분
                        </dd>
                        <dd>
                          마이크로 서비스 아키텍처에 대한 높은 이해도를 가지신
                          분
                        </dd>
                      </dl>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* \\ main column */}
        </article>
      </section>
    </Layout>
  )
}

export default Experience

const list = [
  {
    id: 1,
    date: "2022",
    content1: "올리브영 PDA 매장관리시스템",
    content2: "SAMSUNG Configuration Management System",
    content3: "Naver Webtoon Contents",
    content4: "Suwon water 관망/관리시스템 고도화",
  },
  {
    id: 2,
    date: "2019",
    content1: "KakaoBank 통합인증시스템 개선",
    content2: "CarParking App Manager",
    content3: "Naver Webtoon Contents",
  },
  {
    id: 3,
    date: "2017",
    content1: "SmartFarm ioT System YANGDON",
  },
]

const careers = [
  {
    title: "2022 Software Development 채용",
    position: "DevOps",
  },
  {
    title: "iOS/aOS 운영 개발 채용",
    position: "Back-End",
  },
  {
    title: "2022 하반기 개발자 정규직 상시채용",
    position: "PMO",
  },
  {
    title: "2022 하반기 개발자 정규직 상시채용",
    position: "UX/UI",
  },
]
