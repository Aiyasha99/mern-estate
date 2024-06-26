import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB');
}).catch((err) => {
console.log(err);

});

const app=express();

app.use(express.json());
// by default we are not allowed to send anyhting the server we are allowed to send json input hence use this line 9

app.use(cookieParser());
app.listen(5000, () =>{
console.log('server is running on port 5000 @');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next)=>{
    const statusCode= err.statusCode || 500;
    const message= err.message || 'Internal server error';
    // const message= err.message ;
    return res.status(statusCode).json({
      sucess:false,
      statusCode,
      message,



    });
});
