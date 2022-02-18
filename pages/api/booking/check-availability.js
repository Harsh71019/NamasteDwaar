import nc from 'next-connect';
import { checkRoomBookingAvailability } from '../../../backend/controllers/bookingController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.post(checkRoomBookingAvailability);

export default handler;
