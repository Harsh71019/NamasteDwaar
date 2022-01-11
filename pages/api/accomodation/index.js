import nc from 'next-connect';
import {
  getAllAccomodation,
  newAccomodation,
} from '../../../backend/controllers/accomodationController';
import dbConnect from '../../../backend/config/dbConnect';

const handler = nc();

dbConnect();

handler.get(getAllAccomodation);
handler.post(newAccomodation);

export default handler;
