import React from 'react'
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase'
import {useDispatch}from 'react-redux';
import { signInSucess } from '../redux/user/userSlice';
import {useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleGoogleClick=async()=>{
        try{
const provider=new GoogleAuthProvider(app)
const auth=getAuth()

const result=await signInWithPopup(auth, provider) 
// console.log(result)
const res=await fetch('/api/auth/google',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',

    },
    body:JSON.stringify({name:result.user.displayName, email:result.user.email, photo:result.user.photoURL}),
})
//convert to json and save inside data
const data=await res.json();
dispatch(signInSucess(data));
navigate('/');
        }
        catch(error)
        {
        console.log('cpould not sign in with google', error);
        }
    }
  return (
    <button onClick={handleGoogleClick}  type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      oauth
    </button>
  )
}
