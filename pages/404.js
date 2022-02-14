import NotFound from '../public/images/admin/404.svg';
import Image from 'next/image';
export default function Custom404() {
  return (
    <>
      <div className='container mt-5'>
        <div className='d-flex justify-content-center'>
          <div>
            <Image src={NotFound} alt='404 not found' />
            <h1 className='text-center mt-5'>
              The page you are looking for does not exist
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
