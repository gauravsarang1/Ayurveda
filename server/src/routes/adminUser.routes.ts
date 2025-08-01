import express from 'express';
import {
  registerAdmin,
  loginAdmin,
  refreshAccessToken,
  logoutAdmin
} from '../controllers/adminUser.controllers';

const router = express.Router();

router.post('/register', registerAdmin); // Optional, use only once
router.post('/login', loginAdmin);
router.get('/refresh-token', refreshAccessToken);
router.post('/logout', logoutAdmin);

export default router;
