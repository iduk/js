import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "../../components/layout"

const Article = (props) => {
  const router = useRouter()
  const { postId } = router.query

  return (
    <Layout theme={"article"}>
      <section className="container text-center">
        <h1 className="display-1 text-uppercase">Articles</h1>
      </section>
      <div className="container-fluid">
        <article className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <div style={{ minHeight: "50vh" }}>
              <p>{router.asPath}</p>
              {props.children}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}
export default Article
