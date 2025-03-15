// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


import { firebaseConfig } from "./firebase-secret";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const gAuth = new GoogleAuthProvider();

export const db = getFirestore(app);