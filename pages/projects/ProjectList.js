import Link from "next/link"
// import axios from "axios"
import posts from "../../data/mock_data.json"

const ProjectList = () => {
  return (
    <ol className="post-list">
      {posts.map((post, index) => (
        <li key={post.id}>
          <Link href={"#"}>
            <a className="post-link">
              <div className="contents py-3">
                <p className="display-3 title">{post.title}</p>
                <small>
                  {post.date} ⋅ {post.skill}
                </small>
                <p className="desc small">{post.desc}</p>
              </div>
              <span
                className="thumb mask"
                style={{
                  backgroundImage: `url(${post.thumbImg})`,
                }}
              />
            </a>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default ProjectList
