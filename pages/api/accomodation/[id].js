import nc from 'next-connect';
import {
  getSingleAccomodation,
  updateAccomodation,
  deleteAccomodation,
} from '../../../backend/controllers/accomodationController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getSingleAccomodation);
handler.put(updateAccomodation);
handler.delete(deleteAccomodation);

export default handler;
