import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

// Mongo db connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

// enable app and express method
const app = express();

// To receive json and cookie parser
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// setup routers, linked to routes folder
// routes folder linked to controllers(functions)
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Middleware for error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
