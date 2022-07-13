import React, { useState } from "react"
import Link from "next/link"
import Layout from "../components/layout"
import axios from "axios"
import posts from "../data/mock_data.json"
import styles from "./Experience.module.scss"
import classnames from "classnames"
const cx = classnames.bind(styles)

const Experience = () => {
  const [updown, setUpdown] = useState(false)
  // const handleDropdown = (e) => {
  // }

  return (
    <Layout title="Experience">
      <article className="container-fluid">
        <h1 className="headline mb-8">Perilous Business</h1>
        <article className="row" style={{ minHeight: 800 }}>
          <div className="col-12 col-lg-2">
            <div className="border-top">
              <h5 className="font-weight-bolder">Experience</h5>
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className="border-top">
              <h5 className="font-weight-bolder">Date. 2022/09 </h5>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-2">
            <div className="border-top">
              <ul>
                <li>
                  따뜻한 따뜻한 아니다. 꽃이 이성은 살 시들어 인간은 싹이
                  황금시대의 싶이 것이다. 물방아 같은 이상 그들을 위하여.
                </li>
              </ul>
            </div>
          </div>
        </article>

        <div className="row mt-8">
          <div className="col-12">
            <h1>Careers</h1>
            <ul className={cx("dropdown-list")}>
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
        </div>
      </article>
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
