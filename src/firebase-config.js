// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmDmK91JKDvl5As98EHrNGJZ1zYjvHiok",
  authDomain: "blood-management-system-6d37f.firebaseapp.com",
  projectId: "blood-management-system-6d37f",
  storageBucket: "blood-management-system-6d37f.appspot.com",
  messagingSenderId: "317177341371",
  appId: "1:317177341371:web:b31f3f5c98f56af702509e",
  measurementId: "G-TDN9KFQLH9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
