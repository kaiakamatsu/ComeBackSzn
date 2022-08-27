// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGUfOQRubBRAeEHrWLceZY9pd0N8QJ0rM",
  authDomain: "comebackszn-71e6d.firebaseapp.com",
  projectId: "comebackszn-71e6d",
  storageBucket: "comebackszn-71e6d.appspot.com",
  messagingSenderId: "703346159685",
  appId: "1:703346159685:web:b47818c8e66beee9c4f32c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};