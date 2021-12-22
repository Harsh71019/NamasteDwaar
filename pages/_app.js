import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/accomodation.css';
import '../styles/main.css';
import Head from 'next/head';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
