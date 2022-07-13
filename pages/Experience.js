import React, { useState } from "react"
import Link from "next/link"
import Layout from "../components/layout"
import axios from "axios"
import posts from "../data/mock_data.json"

const list = [
  {
    id: 1,
    dataTitle: "올리브영 PDA 매장관리시스템",
    dataTask: "Co-location",
    client: "OliveYoung",
  },
  {
    id: 2,
    dataTitle: "SAMSUNG  Configuration Management System",
    dataTask: "Co-location",
    client: "SAMSUNG",
  },
  {
    id: 3,
    dataTitle: "Naver Webtoon Contents",
    dataTask: "Co-location",
    client: "NAVER",
  },
  {
    id: 4,
    dataTitle: "Suwon Water 통합솔루션개발",
    dataTask: "Co-location",
    client: "SUWON",
  },
  {
    id: 5,
    dataTitle: "OliveYoung PDA Integrated System",
    dataTask: "Co-location",
    client: "NAVER",
  },
]

const Experience = () => {
  const [updown, setUpdown] = useState(false)
  // const handleDropdown = (e) => {
  // }

  return (
    <Layout title="Experience">
      <section className="container-fluid page-experience">
        <h1 className="display-1 mb-6">Openfloor Space</h1>

        {/* Title */}
        <div className="row">
          <div className="col-12 col-lg-4">
            <section className="mb-6">
              <h6 className="border-bottom py-2">About</h6>
              <p>
                Art direction, Graphic design, Branding, Trend Forecasting,
                Development TroubleShooting
              </p>
            </section>
            <section className="mb-6">
              <h6 className="border-bottom py-2">Role</h6>
              <p className="mb-3">
                Art direction, Graphic design, Branding, Trend Forecasting,
                Development TroubleShooting
              </p>

              <div className="small" style={{ fontStyle: "italic" }}>
                <p>- Creative Team</p>
                <a className="mr-1" href="#">
                  @Mr_Son
                </a>
                <a className="mx-1" href="#">
                  @LimCharJang
                </a>
                <a className="mx-1" href="#">
                  @SunJu_drink
                </a>
                <a className="mx-1" href="#">
                  @Xenon
                </a>
                <a className="mx-1" href="#">
                  @iDuk
                </a>
              </div>
            </section>
          </div>

          <div className="col-12 col-lg-8">
            <h6 className="border-bottom py-2">Client</h6>

            <ul className="">
              {list.map((item) => (
                <li
                  key={item.id}
                  className="d-flex align-items-center border-bottom border-light py-2 text-left"
                >
                  <div className="flex-shrink-0 w-20">
                    <b>{item.client}</b>
                  </div>
                  <div>
                    <p className="display-4">{item.dataTitle}</p>
                    <p>
                      <small className="badges badge mr-1">#uxui</small>
                      <small className="badges badge mr-1">#javascript</small>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="row mt-8">
          <div className="col-12">
            <h1>Careers</h1>
            <ul className={"dropdown-list"}>
              <li onClick={() => setUpdown(!updown)}>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Front-End Developer</p>
                  <p>Role</p>
                  <img src="/img/right-up.svg" width={40} alt="" />
                </div>

                {updown ? (
                  <div className="dropdown-content">
                    <p>경력10년이상</p>
                    <p>스킬 세부설명</p>
                  </div>
                ) : (
                  ""
                )}
              </li>
              <li onClick={() => setUpdown(!updown)}>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Creative UX/UI Product Front-End Developer / Career +20y
                  </p>
                  <img src="/img/right-up.svg" width={40} alt="" />
                </div>

                {updown ? (
                  <div className="dropdown-content">
                    <p>경력10년이상</p>
                    <p>스킬 세부설명</p>
                  </div>
                ) : (
                  ""
                )}
              </li>
              <li onClick={() => setUpdown(!updown)}>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Creative UX/UI Product Front-End Developer / Career +20y
                  </p>
                  <img src="/img/right-up.svg" width={32} alt="" />
                </div>

                {updown ? (
                  <div className="dropdown-content">
                    <p>경력10년이상</p>
                    <p>스킬 세부설명</p>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div> */}
      </section>
    </Layout>
  )
}

export default Experience

// const PostList = () => {
//   // 최근 5개
//   const postsLatest = posts.slice(0, 4)

//   return (
//     <ol className="post-list">
//       {postsLatest.map((post, index) => (
//         <li key={post.id}>
//           <a className="post-link" href="#">
//             <span
//               className="thumb"
//               style={{
//                 backgroundImage: `url(${post.thumbImg})`,
//               }}
//             />
//             <div className="contents">
//               <small className="mt-2">
//                 {post.date} ⋅ {post.skill}
//               </small>
//               <h1 className="title">{post.title}</h1>
//               <p className="desc small">{post.desc}</p>

//               <div className="text-right">
//                 <img src="/img/right-up.svg" width={24} alt="" />
//               </div>
//             </div>
//           </a>
//         </li>
//       ))}
//     </ol>
//   )
// }
