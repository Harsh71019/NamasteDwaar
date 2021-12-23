import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src='https://kit.fontawesome.com/60a0a6cbb9.js'
            crossorigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
