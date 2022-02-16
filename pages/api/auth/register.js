import nc from 'next-connect';
import dbConnect from '../../../backend/config/dbConnect';
import { registerUser } from '../../../backend/controllers/authController';
import onError from '../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../backend/middlewares/auth';
const handler = nc({ onError });

dbConnect();

handler.post(registerUser);

export default handler;
