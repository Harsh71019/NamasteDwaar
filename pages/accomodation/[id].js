import React from 'react';
import { useRouter } from 'next/router';

const roomDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <section>
      <div className='container'>
        <h1>{id}</h1>
      </div>
    </section>
  );
};

export default roomDetails;
