// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyMWVlHpL6a3r8rNC1VViasAH98siy1vM",
  authDomain: "property-portal-eb22e.firebaseapp.com",
  projectId: "property-portal-eb22e",
  storageBucket: "property-portal-eb22e.appspot.com",
  messagingSenderId: "295815655073",
  appId: "1:295815655073:web:ff596cc30596794390cae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app)