import nc from 'next-connect';
import { newBooking } from '../../../backend/controllers/bookingController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.post(newBooking);

export default handler;
