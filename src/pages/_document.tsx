import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { Footer } from '../components/footer/footer.component';
import { Header } from '../components/header/header.component';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
