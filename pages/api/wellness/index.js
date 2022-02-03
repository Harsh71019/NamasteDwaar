import nc from 'next-connect';
import { getAllWellness } from '../../../backend/controllers/wellnessControllers';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getAllWellness);

export default handler;
