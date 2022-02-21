import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import NavbarAdmin from '../../../../components/admin/base/NavbarAdmin';
import {
  getAllAccomodationBookingAdminAction,
  deleteBookingAdminAction,
} from '../../../../redux/actions/bookingAccomodationActions';
import CsvDownload from 'react-json-to-csv';
import Loader from '../../../../components/base/Loader';
import ErrorOccured from '../../../../components/base/ErrorOccured';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Empty from '../../../../public/images/admin/empty.svg';
import Image from 'next/image';

const SeeBookingsAll = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    accomodationBooking: { booking },
  } = useSelector((state) => state.getAllAdminAccomodationBookings);

  const {
    loading: isDeleteLoading,
    error: isDeleteError,
    success: isDeleteSuccess,
  } = useSelector((state) => state.deleteBookingAdmin);

  useEffect(() => {
    dispatch(getAllAccomodationBookingAdminAction());
  }, [dispatch, isDeleteSuccess]);

  function deleteBooking(id) {
    confirmAlert({
      title: 'Delete Accomodation',
      message: 'Are you sure to delete this booking',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            try {
              dispatch(deleteBookingAdminAction(id));

              if (
                isDeleteLoading === false &&
                isDeleteSuccess &&
                !isDeleteError
              ) {
                dispatch(getAllAccomodationBookingAdminAction());
              }
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
        {error && <ErrorOccured />}
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavbarAdmin />
            <div className='container py-3 my-5'>
              <div className='my-5 d-flex justify-content-between'>
                <h1 className='text-center'>See all Accomodation Bookings</h1>

                {!loading && booking?.length !== 0 && (
                  <>
                    <CsvDownload
                      className='btn btn-primary fs16'
                      filename='data.csv'
                      data={booking}
                    >
                      Download Excel
                    </CsvDownload>
                  </>
                )}
              </div>
              {booking && booking?.length === 0 && (
                <div className='col-3 offset-4'>
                  <Image src={Empty} className='w-100' />
                  <h1 className='text-center mt-5'>No bookings yet!🤔🤔🤔</h1>
                </div>
              )}

              {booking && booking.length !== 0 && (
                <table className='table mt-5'>
                  <thead>
                    <tr className='fs-3'>
                      <th scope='col'>#</th>
                      <th scope='col'>Customer Name</th>
                      <th scope='col'>Customer Mobile</th>
                      <th scope='col'>CheckIn</th>
                      <th scope='col'>CheckOut</th>
                      <th scope='col'>Days</th>
                      <th scope='col'>Room Type</th>
                      <th scope='col'>Room Count</th>
                      <th scope='col'>Payment Status</th>
                      <th scope='col'>See Details</th>
                      <th scope='col'>Delete Booking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking &&
                      booking.map((booker, index) => (
                        <tr className='fs-3' key={index}>
                          <th scope='row'>{index + 1}</th>
                          <td>
                            {booker.firstName} {booker.lastName}
                          </td>
                          <td>{booker.mobile}</td>
                          <td>{booker.checkInDate}</td>
                          <td>{booker.checkOutDate}</td>
                          <td>{booker.daysOfStay}</td>
                          <td>{booker.roomName}</td>
                          <td>{booker.roomCount}</td>
                          <td>
                            {booker.isPaid ? (
                              <i className='fas fa-check-circle text-success'></i>
                            ) : (
                              <i className='far fa-window-close text-danger'></i>
                            )}
                          </td>
                          <td>
                            <Link href={`booking/details/${booker._id}`}>
                              <i className='far fa-eye cursor-pointer'></i>
                            </Link>
                          </td>
                          <td>
                            <div onClick={() => deleteBooking(booker._id)}>
                              <i className='cursor-pointer text-danger fas fa-trash'></i>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
              <span>
                Important Note: Please do not delete booking until user calls
                and cancels
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

SeeBookingsAll.auth = true;
export default SeeBookingsAll;
