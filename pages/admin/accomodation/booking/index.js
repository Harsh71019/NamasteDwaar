import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import NavbarAdmin from '../../../../components/admin/base/NavbarAdmin';
import {
  createAccomodationsAdminAction,
  clearErrors,
} from '../../../../redux/actions/admin/accomodationAdminActions';
import { ADMIN_CREATE_ACCOMODATIONS_RESET } from '../../../../redux/constants/admin/accomodationConstants';
import ButtonLoader from '../../../../components/base/ButtonLoader';

const index = () => {
  return <div>See all bookingsS</div>;
};

export default index;
