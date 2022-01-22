import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/accomodation.css';
import '../styles/main.css';
import '../styles/admin.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { wrapper } from '../redux/store';
import { Toaster } from 'react-hot-toast';
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Auth({ children }) {
  const router = useRouter();
  const { data: session, status, token } = useSession();
  console.log(session);
  const isAdmin = session?.user?.role;
  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (isAdmin !== 'admin') router.push('/admin/login'); //Redirect to login
  }, [isAdmin, status]);

  if (isAdmin === 'admin') {
    return children;
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}

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
        <SessionProvider session={pageProps.session}>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </SSRProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
