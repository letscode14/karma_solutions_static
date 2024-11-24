// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIBlY6VwV_1N4eK3cIagx_7YH0ehw-08o",
  authDomain: "olx-clone-baecc.firebaseapp.com",
  projectId: "olx-clone-baecc",
  storageBucket: "olx-clone-baecc.appspot.com",
  messagingSenderId: "232589901904",
  appId: "1:232589901904:web:67375b1b6d00a8e42e5155",
  measurementId: "G-TSN3V60LP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
console.log(storage);

export const db = getFirestore(app);
