// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c3c8.firebaseapp.com",
  projectId: "mern-estate-6c3c8",
  storageBucket: "mern-estate-6c3c8.appspot.com",
  messagingSenderId: "588988673159",
  appId: "1:588988673159:web:916a66f21470a15be35c22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);