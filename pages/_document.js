import Document, { Html, Head, Main, NextScript } from 'next/document'

class Custom_Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" />
        </body>
      </Html>
    )
  }
}

export default Custom_Document
