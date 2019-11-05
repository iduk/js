import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch' // 데이터 가져오기 구동

const Page = ({ errorCode, stars }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async () => {
  const res = await fetch('/')
  const errorCode = res.statusCode > 200 ? res.statusCode : false
  const json = await res.json()

  return { errorCode, stars: json.stargazers_count }
}

export default Page
