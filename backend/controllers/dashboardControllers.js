import User from '../models/user';
import Booking from '../models/booking';
import Enquiry from '../models/enquiry';
import WellnessEnquiry from '../models/wellnessEnquiry';
import Wellness from '../models/wellness';
import Accomodation from '../models/accomodation';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import sendEmail from '../utils/sendEmail';
import absoluteUrl from 'next-absolute-url';
import crypto from 'crypto';

const getDashboardMetrics = catchAsyncErrors(async (req, res) => {
  const accomodation = await Accomodation.find();
  const wellness = await Wellness.find();
  const enquiry = await Enquiry.find();
  const wellnessEnquiry = await WellnessEnquiry.find();
  const booking = await Booking.find();

  const totalBookingSales = await Booking.aggregate([
    { $group: { _id: null, totalSales: { $sum: '$totalPrice' } } },
  ]);

  res.status(200).json({
    success: true,
    message: 'All DashBoard Apis Fetched succesfully',
    accomodation: {
      length: accomodation.length,
    },
    wellness: {
      length: wellness.length,
    },
    enquiry: {
      length: enquiry.length,
    },
    wellnessEnquiry: {
      length: wellnessEnquiry.length,
    },
    booking: {
      length: booking.length,
      totalBookingSales: Number(totalBookingSales.pop().totalSales) / 10,
    },
  });
});

export { getDashboardMetrics };
