import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/accomodation.css';
import '../styles/main.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { wrapper } from '../redux/store';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Toaster
          position='top-right'
          reverseOrder={false}
          toastOptions={{
            style: {
              marginTop: '80px',
              marginRight: '30px',
            },
          }}
        />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
