import nc from 'next-connect';
import { verifyPaymentAccomodation } from '../../../backend/controllers/bookingController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.post(verifyPaymentAccomodation);

export default handler;
