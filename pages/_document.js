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

          <script src={"/js/jquery.slim.min.js"} />
          <script
            src={
              "https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
            }
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </body>
      </Html>
    )
  }
}

export default Custom_Document
