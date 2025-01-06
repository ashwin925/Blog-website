// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZNedi_e-6cpVTHgx0cD06E82x2laKMvY",
  authDomain: "blog-website-ff6f3.firebaseapp.com",
  projectId: "blog-website-ff6f3",
  storageBucket: "blog-website-ff6f3.firebasestorage.app",
  messagingSenderId: "452453704755",
  appId: "1:452453704755:web:397515d2231e129e52ef46",
  measurementId: "G-18QNJ1SJN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);