import React, { useState } from "react"
import Link from "next/link"
import Layout from "../components/layout"
import axios from "axios"
import posts from "../data/mock_data.json"
import styles from "./Experience.module.scss"
import classNames from "classnames"
const cx = classNames.bind(styles)

const Experience = () => {
  const [updown, setUpdown] = useState(false)

  return (
    <Layout title="Experience">
      <article className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-7">
            <p className="headline">
              It was a humorously perilous business for both of us.
            </p>
            <p>
              Queequeg was my own inseparable twin brother; nor could I any way
              get rid of the dangerous liabilities which the hempen bond
              entailed.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1657296221136-a51147fcf9d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
              className="img-fluid rounded"
              alt=""
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1>Careers</h1>
            <ul className="dropdown-list">
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
