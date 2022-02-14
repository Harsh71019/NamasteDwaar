import nc from 'next-connect';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';
import {
  newWellness,
  getAllWellness,
} from '../../../../backend/controllers/wellnessControllers';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(newWellness);
handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAllWellness);

export default handler;
