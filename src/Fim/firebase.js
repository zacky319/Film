// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1rZM9Fm8i8oxK7jXb0T75jSs53ZmmiHU",
  authDomain: "toan-379212.firebaseapp.com",
  projectId: "toan-379212",
  storageBucket: "toan-379212.appspot.com",
  messagingSenderId: "536207615650",
  appId: "1:536207615650:web:050853c5faa6549dd959fb",
  measurementId: "G-N857T1FBQB",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
