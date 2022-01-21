import nc from 'next-connect';
import {
  getAllAccomodationAdmin,
  newAccomodation,
} from '../../../../backend/controllers/accomodationController';
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
  .get(getAllAccomodationAdmin);
handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(newAccomodation);

export default handler;
