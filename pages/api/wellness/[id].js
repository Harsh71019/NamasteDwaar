import nc from 'next-connect';
import { getSingleWellness } from '../../../backend/controllers/wellnessControllers';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getSingleWellness);

export default handler;
