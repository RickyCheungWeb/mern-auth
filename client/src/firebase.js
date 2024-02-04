// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-fc897.firebaseapp.com",
  projectId: "mern-auth-fc897",
  storageBucket: "mern-auth-fc897.appspot.com",
  messagingSenderId: "378746000782",
  appId: "1:378746000782:web:3969bb48bcb8da570b00df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);