import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTjefET42RORseiTh5HgIYOq_oXaZgJY",
  authDomain: "mapuche-art.firebaseapp.com",
  projectId: "mapuche-art",
  storageBucket: "mapuche-art.appspot.com",
  messagingSenderId: "309297311436",
  appId: "1:309297311436:web:ffb3a7fec2b8c9a2c01c69",
  measurementId: "G-ETNP13LGHW",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default app;
