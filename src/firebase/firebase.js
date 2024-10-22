// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//it can help or register firebase console to fire base user
import {getAuth} from 'firebase/auth'

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAydQfoQSYEEIQneuSm3Y3rbcWhcN2AZw4",
  authDomain: "demoauth-8fea7.firebaseapp.com",
  projectId: "demoauth-8fea7",
  storageBucket: "demoauth-8fea7.appspot.com",
  messagingSenderId: "431870350711",
  appId: "1:431870350711:web:abd6dca82587d79cd5bd72",
  measurementId: "G-HR2GPN4E39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const db=getFirestore(app);

export {app,auth}