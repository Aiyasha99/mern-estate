import mongoose from 'mongoose';

const userSchema= new  mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    avatar:{
        type:String,
        default:'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
    }
},
{timestamps:true} 
// user craeted and updated

);
const User= mongoose.model('User',userSchema);
export default User;
