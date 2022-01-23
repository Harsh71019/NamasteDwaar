import nc from 'next-connect';
import { newEnquiry } from '../../../backend/controllers/enquiryController.js';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.post(newEnquiry);

export default handler;
