import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { Footer } from '../components/footer/footer.component'
import { Header } from '../components/header/header.component'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </>
        </Head>
        <body>
          <Header />
          <main className="container">
            <Main />
          </main>
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
