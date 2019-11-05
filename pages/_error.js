import React from 'react'

function Error({ statusCode }) {
  return (
    <p>
      {statusCode ? (
        <div className="error server">
          서버에서 ***${statusCode} 오류가 발생했습니다 😩
        </div>
      ) : (
        <div className="error client">
          클라이언트에서 오류가 발생했습니다 😨
        </div>
      )}
    </p>
  )
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
export default Error
