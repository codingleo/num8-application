import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
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
          <scrip src="../node_modules/jquery/dist/jquery.min.js"></scrip>
          <scrip src="../node_modules/popper.js/dist/popper.min.js"></scrip>
          <scrip src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></scrip>
        </body>
      </Html>
    )
  }
}

export default MyDocument