import { Router } from 'express';
import { userControl } from '../controllers/user.js';

const router = Router();
router.get('/test', userControl);

export default router;
