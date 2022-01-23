import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log('connected to db'));
};

export default dbConnect;
