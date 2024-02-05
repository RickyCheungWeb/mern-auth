import express from 'express';
import {
  google,
  signin,
  signup,
  signout,
} from '../controllers/auth.controller.js';

// express Router method to setup router to POST data
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', signout);

export default router;
