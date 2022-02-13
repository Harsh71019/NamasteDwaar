import nc from 'next-connect';
import { newWellnessEnquiry } from '../../../backend/controllers/wellnessEnquiryController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.post(newWellnessEnquiry);

export default handler;
