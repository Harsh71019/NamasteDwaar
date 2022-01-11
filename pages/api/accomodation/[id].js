import nc from 'next-connect';
import { getSingleAccomodation } from '../../../backend/controllers/accomodationController';
import dbConnect from '../../../backend/config/dbConnect';

const handler = nc();

dbConnect();

handler.get(getSingleAccomodation);

export default handler;
