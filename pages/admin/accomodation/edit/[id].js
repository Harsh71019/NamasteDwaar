import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const EditAccomodation = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

EditAccomodation.auth = true;
export default EditAccomodation;
