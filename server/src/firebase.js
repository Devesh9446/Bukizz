import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { isBrowser } from "browser-or-node";
import { getMessaging } from "firebase/messaging";
let messaging;

const firebaseConfig = {
  apiKey: "AIzaSyBbEk_1lDMvmMokbp7FVlA8BD1cApJb--M",
  authDomain: "bukizz1.firebaseapp.com",
  projectId: "bukizz1",
  storageBucket: "bukizz1.appspot.com",
  messagingSenderId: "87504596017",
  appId: "1:87504596017:web:73188ea0c8f50574f1f910",
  measurementId: "G-Z4ZB84DTZJ",
  databaseURL:"https://bukizz1-default-rtdb.firebaseio.com"
};

const db = initializeApp(firebaseConfig);

const app = getFirestore(db);
if (isBrowser) {
  messaging = getMessaging(db);
}



export{
  app,
  messaging,
}