import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import NavbarAdmin from '../../../components/admin/base/NavbarAdmin';
import { getAllAccomodationsAdminAction } from '../../../redux/actions/admin/accomodationAdminActions';
import Loader from '../../../components/base/Loader';
import Link from 'next/link';

const AdminAccomodation = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    accomodation: { accomodation },
  } = useSelector((state) => state.accomodationAdminReducer);

  const deleteAccomodation = () => {
    console.log('delete accomodation');
  };

  useEffect(() => {
    dispatch(getAllAccomodationsAdminAction());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='container'>
          <NavbarAdmin />
          <h1 className='mt-5'>Accomodation</h1>

          <table class='table mt-5'>
            <thead>
              <tr className='fs-3'>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Price</th>
                <th scope='col'>Room Size</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {accomodation &&
                accomodation.map((room) => (
                  <tr key={room._id} className='fs-3'>
                    <th scope='row'>1</th>
                    <td>{room.name}</td>
                    <td>{room.pricePerNight}</td>
                    <td>{room.roomSize}</td>
                    <td>
                      <Link href={`accomodation/edit/${room._id}`}>
                        <i class='fas fa-edit'></i>
                      </Link>
                    </td>
                    <td>
                      <i onClick={deleteAccomodation} class='fas fa-trash'></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

AdminAccomodation.auth = true;
export default AdminAccomodation;
