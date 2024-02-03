import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import errorHandler from '../utils/error.js';
import jwt from 'jsonwebtoken';

// signup async funtion to process request and response
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  // hashing password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // creating new user using User Class in user model!
  const newUser = new User({ username, email, password: hashedPassword });
  // create user
  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};
// sign in async function
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Mongo method to check useremail
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'wrong credentials'));
    // Check password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(404, 'wrong credentials'));

    // jsonwebtoken
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // security: remove password from client side
    const { password: hashedPassword, ...rest } = validUser._doc; //destructure and only send ._doc

    //add cookie expiry date:
    const expiryDate = new Date(Date.now() + 3600000); //1hour

    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest); //only send rest to client
  } catch (error) {
    next(error);
  }
};
