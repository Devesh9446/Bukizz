import admin from 'firebase-admin';
import {cred} from './cred.js';


admin.initializeApp({
    credential: admin.credential.cert(cred),
    databaseURL: "https://bukizz1-default-rtdb.firebaseio.com"
});


export { admin};