import nc from 'next-connect';
import {
  getAllEnquiry,
  newEnquiry,
} from '../../../backend/controllers/enquiryController.js';
import dbConnect from '../../../backend/config/dbConnect';

const handler = nc();

dbConnect();

handler.get(getAllEnquiry);
handler.post(newEnquiry);

export default handler;
