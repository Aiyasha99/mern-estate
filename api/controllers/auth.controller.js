import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';


export const signup = async (req,res)=>{
const{username, email,  password}=req.body;
const hashedPassword=bcryptjs.hashSync(password,10); 
// hashsync is await in hash
const newUser= new User({username, email,  password:hashedPassword});
try{
    await newUser.save();
    res.status(201).json('User created successfully');  
    // use 201 when create something
}catch(error){
    res.status(500).json(error.message);
}



};