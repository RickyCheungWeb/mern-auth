import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; //require cookie parser
  //if no token
  if (!token) return next(errorHandler(401, 'You are not authenticated!'));

  //verifying token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Token is not valid!'));

    //adding user to the request
    req.user = user;

    //go to next: update user
    next();
  });
};
