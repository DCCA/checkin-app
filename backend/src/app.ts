import express from 'express';

// Create app
const app = express();

// Config app

// Add routes to app
app.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
});

// Export app
export default app;
