import Document, { Html, Head, Main, NextScript } from 'next/document'

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

					<script src="static/jquery.slim.min.js" />
					<script src="static/wow.min.js" />
					<script src="static/bootstrap.bundle.min.js" />
					<script src="static/bootstrap.min.js" />
					<script src="static/jquery.fancybox.min.js" />
					<script>new WOW().init();</script>
				</body>
			</Html>
		)
  }
}

export default Custom_Document
