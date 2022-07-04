import Document, { Html, Head, Main, NextScript } from "next/document"

class Custom_Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />

          <script src={`${process.env.BACKEND_URL}/js/jquery.slim.min.js`} />
          <script src={`${process.env.BACKEND_URL}/js/popper.min.js`} />
          <script src={`${process.env.BACKEND_URL}/js/bootstrap.min.js`} />
          <script
            src={`${process.env.BACKEND_URL}/js/jquery.fancybox.min.js`}
          />
          <script src={`${process.env.BACKEND_URL}/js/wow.min.js`} />
          <script>new WOW().init();</script>
        </body>
      </Html>
    )
  }
}

export default Custom_Document
