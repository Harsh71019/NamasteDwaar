import nc from 'next-connect';
import { getAllBookingsAdmin } from '../../../../backend/controllers/bookingController';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';

const handler = nc({ onError });

dbConnect();

handler.get(getAllBookingsAdmin);
//   .use(isAuthenticatedUser, authorizeRoles('admin'))

export default handler;
