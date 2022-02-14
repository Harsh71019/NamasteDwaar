import nc from 'next-connect';
import { getAllWellnessEnquiry } from '../../../../backend/controllers/wellnessEnquiryController';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';

const handler = nc({ onError });

handler
  .use(isAuthenticatedUser, authorizeRoles('admin'))
  .get(getAllWellnessEnquiry);

dbConnect();
export default handler;
