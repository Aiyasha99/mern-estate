import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {user:userReducer},
  middleWare:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
  
});

