import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import NavbarAdmin from '../../../components/admin/base/NavbarAdmin';
import {
  getAllWellnessAdminAction,
  deleteWellnessAdminAction,
} from '../../../redux/actions/admin/wellnessAdminAction';
import Loader from '../../../components/base/Loader';
import Link from 'next/link';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const AdminWellness = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    wellness: { wellness },
  } = useSelector((state) => state.getAllWellnessAdmin);

  useEffect(() => {
    dispatch(getAllWellnessAdminAction());
  }, [dispatch]);

  function deleteWellnessPackage(id) {
    confirmAlert({
      title: 'Delete Package',
      message: 'Are you sure to delete this package',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            try {
              dispatch(deleteWellnessAdminAction(id));
              dispatch(getAllWellnessAdminAction());
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavbarAdmin />
          <div className='container'>
            <div className='d-flex justify-content-between mt-5'>
              <h1>Wellness Packages</h1>
              <button className='btn btn-primary fs16'>
                <Link href='/admin/wellness/create'>Create New</Link>
              </button>
            </div>

            <table className='table mt-5'>
              <thead>
                <tr className='fs-3'>
                  <th scope='col'>#</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Duration</th>
                  <th scope='col'>Edit</th>
                  <th scope='col'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {wellness &&
                  wellness.map((packages, index) => (
                    <tr key={packages._id} className='fs-3'>
                      <th scope='row'>{index + 1}</th>
                      <td>{packages.title}</td>
                      <td>{packages.duration}</td>
                      <td>
                        <Link href={`accomodation/edit/${packages._id}`}>
                          <i className='cursor-pointer fas fa-edit'></i>
                        </Link>
                      </td>
                      <td>
                        <div
                          onClick={() => deleteWellnessPackage(packages._id)}
                        >
                          <i className='cursor-pointer fas fa-trash'></i>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default AdminWellness;
