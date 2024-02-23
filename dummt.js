//to add data

import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase app
const firebaseConfig = {
  // Your Firebase config object
};

firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
const db = firebase.firestore();

// Define your data
const data = { /* Your data object */ };

// Reference to the Firestore collection
const collectionRef = db.collection("collection_name_path");

// Add a new document to the collection
collectionRef.add(data)
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });


//to set data

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Initialize Firebase app
// const firebaseConfig = {
//   // Your Firebase config object
// };

// firebase.initializeApp(firebaseConfig);

// // Get a Firestore instance
// const db = firebase.firestore();

// // Define your data
// const data = { /* Your data object */ };

// // Specify the document ID
// const documentId = "your_document_id";

// // Reference to the Firestore collection
// const collectionRef = db.collection("collection_name_path");

// // Set a new document with the specified document ID
// collectionRef.doc(documentId).set(data)
//   .then(() => {
//     console.log("Document successfully written with ID: ", documentId);
//   })
//   .catch((error) => {
//     console.error("Error writing document: ", error);
//   });

//to get data
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Initialize Firebase app
// const firebaseConfig = {
//   // Your Firebase config object
// };

// firebase.initializeApp(firebaseConfig);

// // Get a Firestore instance
// const db = firebase.firestore();

// // Reference to the Firestore collection
// const collectionRef = db.collection("collection_name_path");

// // Retrieve all documents from the collection
// collectionRef.get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch((error) => {
//     console.error("Error getting documents: ", error);
//   });


//to get with querry
// Query documents based on a condition
// collectionRef.where("field", "==", "value").get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch((error) => {
//     console.error("Error getting documents: ", error);
//   });


//to update data
// Specify the document ID to update
// const documentId = "your_document_id";

// Update the data of the specified document
// collectionRef.doc(documentId).update({ /* Updated data object */ })
//   .then(() => {
//     console.log("Document successfully updated with ID: ", documentId);
//   })
//   .catch((error) => {
//     console.error("Error updating document: ", error);
//   });
