// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8a-Z1-vTYCcuzMGJ_21zL96rLT_C6C_w",
  authDomain: "quadb-assignment-bdfc8.firebaseapp.com",
  projectId: "quadb-assignment-bdfc8",
  storageBucket: "quadb-assignment-bdfc8.appspot.com",
  messagingSenderId: "986262029504",
  appId: "1:986262029504:web:adc4200e81e74b8c87d925",
  measurementId: "G-45VV624F8L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
