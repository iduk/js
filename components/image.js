import React from 'react'

// image
function Image(props) {
  return <img src={props.src} alt="Logo" width="50" height="auto" />
}
Image.defaultProps = {
  src: '/img/logo.svg',
}

export default Image
