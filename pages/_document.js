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

          <script
            src={"https://code.jquery.com/jquery-3.3.1.slim.min.js"}
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          />
          <script
            src={
              "https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
            }
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          />
          {/* <script src={"/js/bootstrap.min.js"} /> */}
          <script src={"/js/jquery.fancybox.min.js"} />
          <script src={"/js/wow.min.js"} />
          <script src="https://player.vimeo.com/api/player.js" />
          <script>new WOW().init();</script>
        </body>
      </Html>
    )
  }
}

export default Custom_Document
