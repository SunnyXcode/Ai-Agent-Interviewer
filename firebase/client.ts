// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbJ_bmJKCCmrmL4YysWnC5jaxDfksz6jw",
  authDomain: "ai-inteviewer.firebaseapp.com",
  projectId: "ai-inteviewer",
  storageBucket: "ai-inteviewer.firebasestorage.app",
  messagingSenderId: "756289974768",
  appId: "1:756289974768:web:1bd9c4b4067a97c8232d35",
  measurementId: "G-16GNN5J91X"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
