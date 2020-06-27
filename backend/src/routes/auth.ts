import { Router } from 'express';
import * as authController from '../controller/auth';
const router = Router();

// Sign-up
router.post('/sign-up', authController.postSignup);

// Log-in
router.post('/log-in', authController.postLogin);

export default router;
