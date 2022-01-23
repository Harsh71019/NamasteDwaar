import Link from 'next/link';
import React from 'react';

const ErrorOccured = () => {
  return (
    <h1>
      <Link href='/'>Unexpected Error Occured</Link>
    </h1>
  );
};

export default ErrorOccured;
