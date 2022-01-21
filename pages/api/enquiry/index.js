import nc from 'next-connect';
import {
  getAllEnquiry,
  newEnquiry,
} from '../../../backend/controllers/enquiryController.js';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getAllEnquiry);
handler.post(newEnquiry);

export default handler;
