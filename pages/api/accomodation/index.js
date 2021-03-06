import nc from 'next-connect';
import { getAllAccomodation } from '../../../backend/controllers/accomodationController';
import { checkRoomBookingAvailability } from '../../../backend/controllers/bookingController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getAllAccomodation);
handler.post(checkRoomBookingAvailability);

export default handler;
