import nc from 'next-connect';
import { getAllEnquiry } from '../../../../backend/controllers/enquiryController.js';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';

const handler = nc({ onError });

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAllEnquiry);

dbConnect();
export default handler;
