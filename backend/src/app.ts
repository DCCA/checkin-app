// Base imports
import express from 'express';
import 'express-async-errors';
// Route imports
import authRoutes from './routes/auth';

// Create app
const app = express();

// Config app

// Add routes to app
app.use('/auth', authRoutes);
app.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
});

// Export app
export default app;
