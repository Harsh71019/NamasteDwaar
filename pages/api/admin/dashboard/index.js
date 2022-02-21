import nc from 'next-connect';
import { getDashboardMetrics } from '../../../../backend/controllers/dashboardControllers';
import dbConnect from '../../../../backend/config/dbConnect';
import onError from '../../../../backend/middlewares/errors';
import {
  isAuthenticatedUser,
  authorizeRoles,
} from '../../../../backend/middlewares/auth';

const handler = nc({ onError });

dbConnect();

handler.get(getDashboardMetrics);

export default handler;
