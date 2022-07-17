import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "../../components/layout"

const Project = (props) => {
  const router = useRouter()
  const { slug, id } = router.query

  return (
    <Layout theme={"project"}>
      <section className="container text-center">
        <h1 className="display-1 text-uppercase">Project #001</h1>
      </section>
      <div className="container">
        <article className="row">
          <div className="col-12"></div>
        </article>
        <div>{props.children}</div>
      </div>
    </Layout>
  )
}

export default Project
