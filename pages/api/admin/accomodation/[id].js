import nc from 'next-connect';
import {
  getSingleAccomodation,
  updateAccomodation,
  deleteAccomodation,
} from '../../../backend/controllers/accomodationController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';
const handler = nc({ onError });
dbConnect();

handler
  .use(isAuthenticatedUser, authorizeRoles('admin'))
  .get(getSingleAccomodation);
handler
  .use(isAuthenticatedUser, authorizeRoles('admin'))
  .put(updateAccomodation);
handler
  .use(isAuthenticatedUser, authorizeRoles('admin'))
  .delete(deleteAccomodation);

export default handler;
