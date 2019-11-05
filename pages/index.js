import React from 'react'
import { useRouter } from 'next/router'
import History from '../components/history'
import Layout from '../components/layout'

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
  render() {
    return (
      <Layout>
        <p>인덱스는 홈이다</p>
        <div style={{ paddingTop: 100 }}>
          접속정보
          <p style={{ fontSize: 12, color: '#999' }}>{this.props.userAgent}</p>
        </div>
        <History />
      </Layout>
    )
  }
}

export default IndexPage
