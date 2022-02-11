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
import { motion, AnimatePresence } from 'framer-motion';

function Auth({ children }) {
  const router = useRouter();
  const { data: session, status, token } = useSession();
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
const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  when: 'afterChildren',
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <SSRProvider>
        <Toaster
          position='top-right'
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: '16px',
            },
          }}
        />
        <SessionProvider session={pageProps.session}>
          {' '}
          <AnimatePresence>
            <motion.div
              key={router.route}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              id='page-transition-container'
            >
              {Component.auth ? (
                <Auth>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}{' '}
            </motion.div>{' '}
          </AnimatePresence>
        </SessionProvider>
      </SSRProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
