import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import NavbarAdmin from '../../../../components/admin/base/NavbarAdmin';
import { getAllAccomodationBookingAdminAction } from '../../../../redux/actions/bookingAccomodationActions';
import CsvDownload from 'react-json-to-csv';
import Loader from '../../../../components/base/Loader';
import ErrorOccured from '../../../../components/base/ErrorOccured';

const SeeBookingsAll = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    accomodationBooking: { booking },
  } = useSelector((state) => state.getAllAdminAccomodationBookings);

  useEffect(() => {
    dispatch(getAllAccomodationBookingAdminAction());
  }, [dispatch]);

  return (
    <>
      {error && <ErrorOccured />}
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavbarAdmin />
          <div className='container bg-white py-3 my-5'>
            <div className='my-5 d-flex justify-content-between'>
              <h1 className='text-center'>See all Accomodation Bookings</h1>
              {!loading && booking !== [] && (
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
            {/* <div className='d-flex justify-content-between mt-5'>
              <h1>See all Accomodation Bookings</h1>
            </div> */}

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
                </tr>
              </thead>
              <tbody>
                {booking &&
                  booking.map((booker, index) => (
                    <tr className='fs-3'>
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
                          <i class='fas fa-check-circle text-success'></i>
                        ) : (
                          <i class='far fa-window-close text-danger'></i>
                        )}
                      </td>
                      <td>
                        <Link href={`booking/details/${booker._id}`}>
                          <i class='far fa-eye cursor-pointer'></i>
                        </Link>
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

SeeBookingsAll.auth = true;
export default SeeBookingsAll;
