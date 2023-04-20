// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9czLoUCQ9PVn7wpHxWOEriPHGIAlg4CA",
  authDomain: "fir-auth-b74a1.firebaseapp.com",
  projectId: "fir-auth-b74a1",
  storageBucket: "fir-auth-b74a1.appspot.com",
  messagingSenderId: "701886059235",
  appId: "1:701886059235:web:3a4ef6d408da6e65db2bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;