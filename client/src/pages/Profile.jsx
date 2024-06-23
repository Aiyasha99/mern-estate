import React from 'react'
import {useRef, useState} from 'react'
import { useSelector } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure} from '../redux/user/userSlice';

import { useDispatch } from 'react-redux';
// fireabse storage rules 
// rules_version = '2';

// // Craft rules based on data in your Firestore database
// // allow write: if firestore.get(
// //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write: if 
//       request.resource.size<2*1024*1024 &&
//       request.resource.contentType.matches('image/.*')
//     }
//   }
// }
export default function Profile() {

  const fileRef=useRef(null)
  const { currentUser, error} = useSelector((state) => state.user);
  const[file, setFile]= useState(undefined)
  const [formData, setFormData] = useState({});
  
  const [updateSuccess, setUpdateSuccess] = useState(false);
const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  }

  console.log( formData);
    return (
   
       <div className='p-3 max-w-lg mx-auto'>
       <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
       <form onSubmit={handleSubmit}className='flex flex-col gap-4'>

        <input onChange={(e)=>setFile(e.target.files[0])}
        type='file' ref={fileRef} hidden accept='image/*'></input>
       <img
        onClick={()=>
          fileRef.current.click()
        }
          src={ currentUser.avatar}
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
           <input
          type='text'
          placeholder='username'
          onChange={handleChange}
          defaultValue={currentUser.username}
          id='username'
          className='border p-3 rounded-lg'
       
        />
        <input
          type='email'
          placeholder='email'
          onChange={handleChange}
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg'
         
        />
        <input
          type='password'
          placeholder='password'
          onChange={handleChange}
          id='password'
          className='border p-3 rounded-lg'
        />
  <button
         
          className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
        >
  Update
        </button>
        </form>
        <div className='flex justify-between mt-5'>
        <span
        
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span  className='text-red-700 cursor-pointer'>
          Sign out
        </span>
       
      </div>
      <p className='text-red-700 mt-5'>{error ? error : ''} </p>
      <p className='text-green-700 mt-5'>
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>
    </div>
  )
}
