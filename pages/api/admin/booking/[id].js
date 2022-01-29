import nc from 'next-connect';
import { getSingleBookingAccomodation } from '../../../../backend/controllers/bookingController';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';

const handler = nc({ onError });
dbConnect();

handler.get(getSingleBookingAccomodation);

export default handler;
