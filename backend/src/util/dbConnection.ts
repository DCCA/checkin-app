import mongoose from 'mongoose';

export const db = mongoose.connect(
  `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@node-complete-bftj6.gcp.mongodb.net/checkinapp?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
