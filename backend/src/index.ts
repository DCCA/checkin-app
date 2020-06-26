import express from 'express';
// Setting Env Vars
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
