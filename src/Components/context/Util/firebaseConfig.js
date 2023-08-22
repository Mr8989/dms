// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHNhYDqNrUO5hSxPGgu3wjzDh3kLu6iMA",
  authDomain: "data-management-system-70757.firebaseapp.com",
  projectId: "data-management-system-70757",
  storageBucket: "data-management-system-70757.appspot.com",
  messagingSenderId: "92988194264",
  appId: "1:92988194264:web:80b7f1bf1717f5b95ec6ad",
  measurementId: "G-ZW2DQ7RKGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export  {auth, app as default};
