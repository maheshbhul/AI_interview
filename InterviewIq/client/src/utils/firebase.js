/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-f9712.firebaseapp.com",
  projectId: "interviewiq-f9712",
  storageBucket: "interviewiq-f9712.firebasestorage.app",
  messagingSenderId: "328046377659",
  appId: "1:328046377659:web:442c4cb27c16d99246479e",
  measurementId: "G-WY4LCJPNKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();



export{auth,provider}