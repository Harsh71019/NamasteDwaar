import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import NavbarAdmin from '../../../components/admin/base/NavbarAdmin';
import {
  getAllAccomodationsAdminAction,
  deleteAccomodationsAdminAction,
} from '../../../redux/actions/admin/accomodationAdminActions';
import Loader from '../../../components/base/Loader';
import Link from 'next/link';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const AdminAccomodation = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    accomodation: { accomodation },
  } = useSelector((state) => state.accomodationAdminReducer);

  useEffect(() => {
    dispatch(getAllAccomodationsAdminAction());
  }, [dispatch]);

  function deleteAccomodation(id) {
    confirmAlert({
      title: 'Delete Accomodation',
      message: 'Are you sure to delete this accomodation',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            try {
              dispatch(deleteAccomodationsAdminAction(id));
              dispatch(getAllAccomodationsAdminAction());
            } catch (error) {
              toast.error('Internal Server Error');
            }
          },
        },
        {
          label: 'No',
          onClick: () => alert('Phew Saved'),
        },
      ],
    });
  }

  return (
    <>
      <div className='bg-white vh-100'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavbarAdmin />
            <div className='container  p-5'>
              <div className='d-flex justify-content-between mt-5'>
                <h1>Accomodation</h1>
                <Link href='/admin/accomodation/create'>
                  <button className='btn btn-primary fs16'>Create New</button>
                </Link>
              </div>

              <table className='table mt-5'>
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
                    accomodation.map((room, index) => (
                      <tr key={room._id} className='fs-3'>
                        <th scope='row'>{index + 1}</th>
                        <td>{room.name}</td>
                        <td>₹{room.pricePerNight}</td>
                        <td>{room.roomSize}</td>
                        <td>
                          <Link href={`accomodation/edit/${room._id}`}>
                            <i className='text-info cursor-pointer fas fa-edit'></i>
                          </Link>
                        </td>
                        <td>
                          <div onClick={() => deleteAccomodation(room._id)}>
                            <i className='cursor-pointer text-danger fas fa-trash'></i>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

AdminAccomodation.auth = true;
export default AdminAccomodation;
