import React, { useState } from 'react';
import Footer from '../../components/base/Footer';
import Navbar from '../../components/base/Navbar';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import ButtonLoader from '../../components/base/ButtonLoader';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LoginImage from '../../public/images/admin/login.svg';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result.error) {
      toast.error(result.error, {
        style: {
          fontSize: '16px',
        },
      });
    } else {
      toast.success('Login Success', {
        style: {
          fontSize: '16px',
        },
      });
      window.location.href = '/admin';
    }
  };

  return (
    <>
      <Navbar />
      <section className='login-page' style={{ backgroundColor: '#f8f9fa' }}>
        <div className='container'>
          <div className='row d-flex justify-content-center align-items-center py-5'>
            <div className='col-md-6 col-12 p-md-5 p-1'>
              <Image src={LoginImage} alt='login' className='p-md-5 p-1' />
            </div>
            <div className='col-md-6 col-12'>
              {' '}
              <div
                className='login-page__container py-5'
                style={{ maxWidth: '400px' }}
              >
                <div className='py-5'>
                  <form className='p-5' onSubmit={submitHandler}>
                    <div className='mb-3 fs-3'>
                      <label
                        htmlFor='exampleFormControlInput1'
                        className='form-label'
                      >
                        Email address
                      </label>
                      <input
                        type='email'
                        className='form-control fs-3'
                        id='email'
                        placeholder='name@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className='mb-3 fs-3'>
                      <label
                        htmlFor='exampleFormControlInput1'
                        className='form-label'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        className='form-control fs-3'
                        id='password'
                        placeholder='Please enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className='d-flex justify-content-between mt-5'>
                      {/* <button
                        type='submit'
                        className='btn-danger btn w-100 fs-3'
                        disabled={loading ? true : false}
                      >
                        <Link
                          href='/password/forgot'
                          className='float-right mb-4'
                        >
                          Forgot Password?
                        </Link>
                      </button> */}

                      <button
                        type='submit'
                        className='btn-primary btn w-100  fs-3'
                        disabled={loading ? true : false}
                      >
                        {loading ? <ButtonLoader /> : 'Login'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default login;
