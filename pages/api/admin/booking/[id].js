import nc from 'next-connect';
import {
  getSingleBookingAccomodation,
  deleteBooking,
} from '../../../../backend/controllers/bookingController';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';

const handler = nc({ onError });
dbConnect();

handler
  .use(isAuthenticatedUser, authorizeRoles('admin'))
  .get(getSingleBookingAccomodation);
handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteBooking);
export default handler;
