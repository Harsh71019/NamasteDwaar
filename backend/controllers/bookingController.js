import Booking from '../models/booking';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import sendEmail from '../utils/sendEmail';
import absoluteUrl from 'next-absolute-url';
import crypto from 'crypto';
import Accomodation from '../models/accomodation';
const Razorpay = require('razorpay');

import dotenv from 'dotenv';
dotenv.config();

// Create new Booking   =>   /api/bookings
const newBooking = catchAsyncErrors(async (req, res) => {
  const {
    accomodation,
    checkInDate,
    checkOutDate,
    firstName,
    lastName,
    mobile,
    email,
    roomCount,
    adult,
    child,
  } = req.body;

  const accomodationDetails = await Accomodation.findById(accomodation);
  const { pricePerNight } = accomodationDetails;

  const date1 = new Date(checkInDate);
  const date2 = new Date(checkOutDate);
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Number(Difference_In_Time / (1000 * 3600 * 24));

  const amountGenerated =
    Number(Difference_In_Days * pricePerNight) * Number(roomCount);
  const gst = 0.18;
  const gstPrice = amountGenerated * gst;
  const totalPriceAfterGST = Math.round(
    amountGenerated + amountGenerated * gst
  );
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEYID,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });
  const id = crypto.randomBytes(16).toString('hex');
  const options = {
    amount: totalPriceAfterGST, // amount in smallest currency unit
    currency: 'INR',
    receipt: id,
  };
  const order = await instance.orders.create(options);

  const booking = await Booking.create({
    accomodation,
    checkInDate,
    checkOutDate,
    daysOfStay: Difference_In_Days,
    firstName,
    lastName,
    mobile,
    email,
    amountGenerated: amountGenerated,
    totalPrice: totalPriceAfterGST,
    gst: gstPrice,
    razorPayOrderGenerate: order,
    roomCount,
    adult,
    child,
  });

  res.status(200).json({
    success: true,
    booking,
  });
});

const verifyPaymentAccomodation = catchAsyncErrors(async (req, res, next) => {
  const {
    orderCreationId,
    razorpayPaymentId,
    razorpayOrderId,
    razorpaySignature,
  } = req.body;

  // Creating our own digest
  // The format should be like this:
  // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
  const shasum = crypto.createHmac('sha256', 'w2lBtgmeuDUfnJVp43UpcaiT');

  shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

  const digest = shasum.digest('hex');

  // comaparing our digest with the actual signature
  if (digest !== razorpaySignature)
    return next(new ErrorHandler('Transaction is not legit.', 400));

  const booking = await Booking.create({
    paymentResultRazor: {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    },
  });

  res.status(200).json({
    success: true,
    booking,
  });

  // THE PAYMENT IS LEGIT & VERIFIED
  // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
});

const getAllBookingsAdmin = catchAsyncErrors(async (req, res) => {
  const booking = await Booking.find();
  res.status(200).json({
    success: true,
    message: 'All Accomodation Bookings retrieved successfully',
    booking: booking,
    count: booking.length,
  });
});

export { newBooking, getAllBookingsAdmin, verifyPaymentAccomodation };
