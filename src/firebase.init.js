// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDURb78DYMKbRISf4Ixx8537hS4ft7Fy1s",
    authDomain: "ema-john-simple-28141.firebaseapp.com",
    projectId: "ema-john-simple-28141",
    storageBucket: "ema-john-simple-28141.appspot.com",
    messagingSenderId: "88738123869",
    appId: "1:88738123869:web:498c23e2212f51c7007db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;