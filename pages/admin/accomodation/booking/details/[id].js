import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleAdminAccomodationBookingAction } from '../../../../../redux/actions/bookingAccomodationActions';
import moment from 'moment-timezone';
import Loader from '../../../../../components/base/Loader';
import NavbarAdmin from '../../../../../components/admin/base/NavbarAdmin';

const detailsbookingaccomodation = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const { loading, error, bookingAccomodationDetails } = useSelector(
    (state) => state.getSingleBookAdminAccomodation
  );

  useEffect(() => {
    if (id) {
      dispatch(getSingleAdminAccomodationBookingAction(id));
    }
  }, [id]);

  return (
    <>
      <div className='bg-white vh-100'>
        <NavbarAdmin />
        {error && 'Error Occured'}
        {loading ? (
          <Loader />
        ) : (
          <section className='py-3 '>
            <div className='container py-5 bg-white'>
              <h1>Booking Details</h1>
              <div className='row py-3'>
                <div className='col-12 mt-5'>
                  <ul className='list-group fs16'>
                    <li className='list-group-item '>
                      <strong className='font-weight-bold'>
                        <i class='far fa-user'></i> Customer Details:
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      Booking ID: {bookingAccomodationDetails?.booking?._id}
                    </li>
                    <li className='list-group-item'>
                      Customer Name:&nbsp;
                      {bookingAccomodationDetails?.booking?.firstName}
                      &nbsp;
                      {bookingAccomodationDetails?.booking?.lastName}
                    </li>
                    <li className='list-group-item'>
                      Mobile:{bookingAccomodationDetails?.booking?.mobile}
                    </li>
                    <li className='list-group-item'>
                      Email: {bookingAccomodationDetails?.booking?.email}
                    </li>
                    <li className='list-group-item'>
                      Date of Booking:{' '}
                      {moment(bookingAccomodationDetails?.booking?.createdAt)
                        .tz('Asia/Kolkata')
                        .format('dddd, MMMM Do YYYY, hh:mm:ss a')}
                    </li>
                  </ul>
                </div>
                <div className='col-12 mt-5'>
                  <ul className='list-group fs16'>
                    <li className='list-group-item '>
                      <strong className='font-weight-bold'>
                        <i class='fas fa-person-booth'></i> Booking Details:
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      Check-In Date:
                      {bookingAccomodationDetails?.booking?.checkInDate}
                    </li>
                    <li className='list-group-item'>
                      Check-Out Date:
                      {bookingAccomodationDetails?.booking?.checkOutDate}
                    </li>
                    <li className='list-group-item'>
                      Days of Stay:
                      {bookingAccomodationDetails?.booking?.daysOfStay}
                    </li>
                    <li className='list-group-item'>
                      No of Adult:
                      {bookingAccomodationDetails?.booking?.adult}
                    </li>
                    <li className='list-group-item'>
                      No of Children:
                      {bookingAccomodationDetails?.booking?.child}
                    </li>
                  </ul>
                </div>
                <div className='col-12 mt-5'>
                  <ul className='list-group fs16'>
                    <li className='list-group-item '>
                      <strong className='font-weight-bold'>
                        <i class='fas fa-receipt'></i> Payment Details:
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      Order Id:
                      {bookingAccomodationDetails?.booking?.orderID}
                    </li>
                    <li className='list-group-item'>
                      Amount: ₹
                      {bookingAccomodationDetails?.booking?.amountGenerated}
                    </li>
                    <li className='list-group-item'>
                      GST: ₹{bookingAccomodationDetails?.booking?.gst}
                    </li>
                    <li className='list-group-item'>
                      Total Amount: ₹
                      {bookingAccomodationDetails?.booking?.totalPrice / 100}
                    </li>
                    <li className='list-group-item'>
                      Is Payment Done:
                      {bookingAccomodationDetails?.booking?.isPaid ? (
                        <span>
                          <i class='ms-3 fas fa-check-circle text-success'></i>
                        </span>
                      ) : (
                        <span>
                          {' '}
                          <i class='ms-3 far fa-window-close text-danger'></i>
                        </span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}{' '}
      </div>
    </>
  );
};

export default detailsbookingaccomodation;
