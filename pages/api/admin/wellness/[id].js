import nc from 'next-connect';
import {
  deleteWellness,
  getSingleWellness,
} from '../../../../backend/controllers/wellnessControllers';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';
const handler = nc({ onError });
dbConnect();

handler.get(getSingleWellness);

handler.delete(deleteWellness);

export default handler;
