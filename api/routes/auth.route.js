import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

// express Router method to setup router to POST data
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
