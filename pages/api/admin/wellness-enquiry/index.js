import nc from 'next-connect';
import { getAllWellnessEnquiry } from '../../../../backend/controllers/wellnessEnquiryController';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';

const handler = nc({ onError });

handler.get(getAllWellnessEnquiry);

//   .use(isAuthenticatedUser, authorizeRoles('admin'))

dbConnect();
export default handler;
