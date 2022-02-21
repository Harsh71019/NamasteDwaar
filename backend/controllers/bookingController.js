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

function getMaxRooms(adults, roomOccupancy) {
  let room = adults / roomOccupancy;
  if (Number.isInteger(room)) {
    return room;
  }
  if (!Number.isInteger(room)) {
    return Math.ceil(room);
  }
}

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
    adult,
    child,
  } = req.body;

  const accomodationDetails = await Accomodation.findById(accomodation);
  const {
    pricePerNight,
    name,
    occupancy,
    roomCount: roomTotalAvailable,
  } = accomodationDetails;

  const noOfRooms = getMaxRooms(adult, occupancy);

  const roomsLeftAfterBooking = roomTotalAvailable - noOfRooms;

  const date1 = new Date(checkInDate);
  const date2 = new Date(checkOutDate);
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Number(Difference_In_Time / (1000 * 3600 * 24));

  const amountGenerated =
    Number(Difference_In_Days * pricePerNight) * Number(noOfRooms);
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

  const finalPrice = totalPriceAfterGST * 100;
  const options = {
    amount: finalPrice, // amount in smallest currency unit
    currency: 'INR',
    receipt: id,
  };
  const order = await instance.orders.create(options);
  const orderID = order.id;
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
    totalPrice: finalPrice,
    gst: gstPrice,
    razorPayOrderGenerate: order,
    roomCount: noOfRooms,
    adult,
    child,
    orderID,
    roomName: name,
    roomPrice: pricePerNight,
    roomsLeftToBook: roomsLeftAfterBooking,
  });

  res.status(200).json({
    success: true,
    booking,
  });
});

// Create new booking   =>   /api/bookings/check
const checkRoomBookingAvailability = catchAsyncErrors(async (req, res) => {
  let { checkInDate, checkOutDate, adult, roomId } = req.body;

  const accomodationDetails = await Accomodation.findById(roomId);
  const { occupancy, roomCount: roomTotalAvailable } = accomodationDetails;

  const noOfRooms = getMaxRooms(adult, occupancy);
  let isAvailable;
  console.log(occupancy);
  const roomsLeftToBook = roomTotalAvailable - noOfRooms;

  console.log(roomsLeftToBook);

  if (roomsLeftToBook < 0) {
    isAvailable = false;
    res.status(200).json({
      success: true,
      isAvailable,
    });
  } else {
    const minRoomAvailable = 0;
    const bookings = await Booking.find({
      room: roomId,
      $and: [
        {
          checkInDate: {
            $lte: checkOutDate,
          },
        },
        {
          checkOutDate: {
            $gte: checkInDate,
          },
        },
        {
          roomsLeftToBook: {
            $lte: minRoomAvailable,
          },
        },
      ],
    });

    if (bookings && bookings.length === 0) {
      isAvailable = true;
    } else {
      isAvailable = false;
    }

    res.status(200).json({
      success: true,
      isAvailable,
    });
  }
});

const verifyPaymentAccomodation = catchAsyncErrors(async (req, res, next) => {
  const {
    id,
    orderCreationId,
    razorpayPaymentId,
    razorpayOrderId,
    razorpaySignature,
  } = req.body;

  const booking = await Booking.findById(id);

  if (booking) {
    booking.paymentResultRazor.orderCreationId = orderCreationId;
    booking.paymentResultRazor.razorpayPaymentId = razorpayPaymentId;
    booking.paymentResultRazor.razorpayOrderId = razorpayOrderId;
    booking.paymentResultRazor.razorpaySignature = razorpaySignature;
    booking.isPaid = true;
  }

  const updatedBooking = await booking.save();

  // Creating our own digest
  // The format should be like this:
  // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
  // const shasum = crypto.createHmac('sha256', 'w2lBtgmeuDUfnJVp43UpcaiT');

  // shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

  // const digest = shasum.digest('hex');

  // // comaparing our digest with the actual signature
  // if (digest !== razorpaySignature)
  //   return next(new ErrorHandler('Transaction is not legit.', 400));

  res.status(200).json({
    success: true,
    updatedBooking,
  });

  // THE PAYMENT IS LEGIT & VERIFIED
  // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
});

const getAllBookingsAdmin = catchAsyncErrors(async (req, res) => {
  const booking = await Booking.find().sort({ _id: -1 });

  res.status(200).json({
    success: true,
    message: 'All Accomodation Bookings retrieved successfully',
    booking: booking,
    count: booking.length,
  });
});

const getSingleBookingAccomodation = catchAsyncErrors(
  async (req, res, next) => {
    const booking = await Booking.findById(req.query.id);
    if (!booking) {
      return next(new ErrorHandler('Accomodation not found with this ID', 404));
    }

    res.status(200).json({
      success: true,
      message: 'All Accomodation retrieved successfully',
      booking: booking,
    });
  }
);

const deleteBooking = catchAsyncErrors(async (req, res, next) => {
  const booking = await Booking.findById(req.query.id);

  if (!booking) {
    return next(new ErrorHandler('Booking not found with this ID', 404));
  }

  await booking.remove();

  res.status(200).json({
    success: true,
    message: 'Booking Deleted Successfully',
  });
});

export {
  newBooking,
  getAllBookingsAdmin,
  verifyPaymentAccomodation,
  getSingleBookingAccomodation,
  checkRoomBookingAvailability,
  deleteBooking,
};
