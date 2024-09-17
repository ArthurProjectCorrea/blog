import express from 'express';
import { registerUser } from '../controllers/userController.js';

const router = express.Router();

// Rota de registro
router.post('/create', registerUser);

export default router;
