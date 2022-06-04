import { connect } from 'mongoose';

export const dbConnect = async () =>
  await connect(`${process.env.MONGO_URL}`)
    .then(() => console.log('DATABASE IS CONNECTED'))
    .catch((error) => console.error(error));
