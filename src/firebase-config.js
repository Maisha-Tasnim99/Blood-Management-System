// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNncN64IKi4Yy5LFYXdtXaWLDcx7JrBzA",
  authDomain: "blood-management-system-58df5.firebaseapp.com",
  projectId: "blood-management-system-58df5",
  storageBucket: "blood-management-system-58df5.appspot.com",
  messagingSenderId: "236160097880",
  appId: "1:236160097880:web:65f0e4dc9b07c58e80f42d",
  measurementId: "G-6EY6WQEBXK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
