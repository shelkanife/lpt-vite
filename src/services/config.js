// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS76rOZTH53JwH3p5ct_F7Yb9YJUTTze0",
  authDomain: "periodic-table-b04bd.firebaseapp.com",
  projectId: "periodic-table-b04bd",
  storageBucket: "periodic-table-b04bd.appspot.com",
  messagingSenderId: "436070509737",
  appId: "1:436070509737:web:3b67e6f7bbfc62e09b8db8",
  measurementId: "G-S83MJJEXS0",
  // storageBucket: "gs://periodic-table-b04bd.appspot.com",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// const database = getDatabase();

export { auth, app, db, storage };
