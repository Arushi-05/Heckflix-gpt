// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAInNq0IT1L3ckBxlfsm7bUw0H2f6nLiYE",
  authDomain: "heckflixgpt.firebaseapp.com",
  projectId: "heckflixgpt",
  storageBucket: "heckflixgpt.firebasestorage.app",
  messagingSenderId: "428027650377",
  appId: "1:428027650377:web:67c7326a689ed63ddbfa98",
  measurementId: "G-XF10CQMSL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();