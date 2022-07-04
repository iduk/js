import React from "react"
import Layout from "../components/layout"
import ActiveLink from "../components/ActiveLink"
import Map from "../components/Map"
import "../components/styles/app.scss"

class Contact extends React.Component {
  render() {
    return (
      <Layout title="Contact">
        <h2 className="d-flex justify-content-center display-3">
          이럴거면 첨부터 다시 만드는게 안낫겠니
        </h2>
      </Layout>
    )
  }
}
export default Contact
