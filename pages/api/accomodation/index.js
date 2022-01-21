import nc from 'next-connect';
import {
  getAllAccomodation,
  newAccomodation,
} from '../../../backend/controllers/accomodationController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getAllAccomodation);
handler.post(newAccomodation);

export default handler;
