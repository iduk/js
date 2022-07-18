import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "../../components/layout"
import styled from "styled-components"

const Article = (props) => {
  const router = useRouter()
  const { postId } = router.query

  return (
    <Layout theme={"article"}>
      <section className="container-fluid">
        <div className="row no-gutters justify-content-center">
          <div className="col-12 col-lg-8 px-0">
            {/* Article Container */}
            <GridWrap>
              <nav>
                <Link href="/projects">
                  <a className="btn btn-lg rounded-0">GoBack</a>
                </Link>
              </nav>
              <header className="text-center py-4">
                <h1 className="display-1 text-uppercase">Article</h1>
                <p>{router.asPath}</p>
              </header>
              <main>{props.children}</main>
              <footer className="d-flex justify-content-between">
                <Link href="#">
                  <a className="btn btn-lg rounded-0">Prev</a>
                </Link>
                <Link href="#">
                  <a className="btn btn-lg rounded-0">Next</a>
                </Link>
              </footer>
            </GridWrap>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Article

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1px;

  > nav,
  > header,
  > main,
  > footer {
    outline: 1px solid #cc3a3a;
  }
  > main {
    min-height: 50vh;
  }
`
