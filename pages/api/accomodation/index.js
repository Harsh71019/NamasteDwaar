import nc from 'next-connect';
import { getAllAccomodation } from '../../../backend/controllers/accomodationController';
import dbConnect from '../../../backend/config/dbConnect';
import onError from '../../../backend/middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getAllAccomodation);

export default handler;
