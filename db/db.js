// const initializeApp = require("firebase/app");
const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");
const serviceAccount = require("../firebase-admin.json");
const dotenv = require("dotenv");
dotenv.config();

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = db;

// async function test() {
//   try {
//     const docRef = db.collection("users").doc("alovelace");

//     await docRef.set({
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
