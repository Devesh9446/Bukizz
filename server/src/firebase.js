import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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

const db = initializeApp(firebaseConfig);

const app = getFirestore(db);
// const analytics = getAnalytics(app);

export{
  app,
}