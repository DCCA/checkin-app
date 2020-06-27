import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import { db } from './util/dbConnection';
import { logGreen, logRed } from './util/logColors';

const port = process.env.PORT;
db.then(() => {
  console.log(logGreen, 'DB Connected.');
  app.listen(port, () => {
    console.log(logGreen, `Server started on port ${port}`);
  });
}).catch((err) => {
  console.log(logRed, err);
});
