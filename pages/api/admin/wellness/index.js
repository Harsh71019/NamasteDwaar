import nc from 'next-connect';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';
import { newWellness } from '../../../../backend/controllers/wellnessControllers';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

const handler = nc({ onError });

dbConnect();

handler.post(newWellness);

export default handler;
