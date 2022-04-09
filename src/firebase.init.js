// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXkS_Z_1uxkQcX5GB8rThy6pNaxxzDhmU",
  authDomain: "ema-john-simple-a41a5.firebaseapp.com",
  projectId: "ema-john-simple-a41a5",
  storageBucket: "ema-john-simple-a41a5.appspot.com",
  messagingSenderId: "267726833143",
  appId: "1:267726833143:web:58bfb51c6654307c23daf2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
