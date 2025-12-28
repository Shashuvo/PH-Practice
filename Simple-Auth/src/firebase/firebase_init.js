// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC46r_AzcfuYcLenAPn28gDju8rKPktdKo",
  authDomain: "simple-auth-f6a78.firebaseapp.com",
  projectId: "simple-auth-f6a78",
  storageBucket: "simple-auth-f6a78.firebasestorage.app",
  messagingSenderId: "796091994831",
  appId: "1:796091994831:web:c078614efaa4b6571f9dba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);