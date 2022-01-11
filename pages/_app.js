import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/accomodation.css';
import '../styles/main.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
