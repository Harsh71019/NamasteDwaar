import mongoose from 'mongoose';
import timeZone from 'mongoose-timezone';

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  orderID: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  roomCount: {
    type: Number,
    default: 0,
  },
  adult: {
    type: Number,
    default: 0,
  },
  child: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
  },
  accomodation: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Accomodation',
  },
  checkInDate: {
    type: String,
    required: true,
  },
  checkOutDate: {
    type: String,
    required: true,
  },
  amountGenerated: {
    type: Number,
    required: false,
  },
  razorPayOrderGenerate: {
    type: Object,
    required: true,
  },
  daysOfStay: {
    type: Number,
    required: true,
  },
  paidAt: {
    type: Date,
  },
  gst: {
    type: Number,
    required: true,
  },
  paymentResultRazor: {
    orderCreationId: { type: String },
    razorpayPaymentId: { type: String },
    razorpayOrderId: { type: String },
    razorpaySignature: { type: String },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

bookingSchema.plugin(timeZone);

export default mongoose.models.Booking ||
  mongoose.model('Booking', bookingSchema);
