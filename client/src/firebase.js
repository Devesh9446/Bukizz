// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbEk_1lDMvmMokbp7FVlA8BD1cApJb--M",
  authDomain: "bukizz1.firebaseapp.com",
  projectId: "bukizz1",
  storageBucket: "bukizz1.appspot.com",
  messagingSenderId: "87504596017",
  appId: "1:87504596017:web:73188ea0c8f50574f1f910",
  measurementId: "G-Z4ZB84DTZJ",
  databaseURL:"https://bukizz1-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);