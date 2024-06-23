import express from 'express';
import {test, updateUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router =express.Router();
router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser); // whenm we sign in a user we create a token insinde the cookie use that token to verify 
export default router;