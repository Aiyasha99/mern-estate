import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB');
}).catch((err) => {
console.log(err);

});

const app=express();

app.use(express.json());
// by default we are not allowed to send anyhting the server we are allowed to send json input hence use this line 9

app.listen(5000, () =>{
console.log('server is running on port 5000 @');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

