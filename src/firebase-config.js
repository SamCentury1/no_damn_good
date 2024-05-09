// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzM4ELX2lcPyna-XBtucOwoWdQzacrqic",
  authDomain: "no-damn-good-website.firebaseapp.com",
  projectId: "no-damn-good-website",
  storageBucket: "no-damn-good-website.appspot.com",
  messagingSenderId: "33178271760",
  appId: "1:33178271760:web:613f334ceb0be642508a95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)