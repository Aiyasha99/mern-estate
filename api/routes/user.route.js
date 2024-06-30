import express from 'express';
import {test, updateUser, deleteUser, getUserListings, getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router =express.Router();
router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser);//first create route then create eg : updateUser function  in conttoller 
router.delete('/delete/:id',verifyToken, deleteUser);   //:id this is params 
// whenm we sign in a user we create a token insinde the cookie use that token to verify 
router.get('/listings/:id',verifyToken, getUserListings); 
router.get('/:id',verifyToken, getUser); 
export default router;