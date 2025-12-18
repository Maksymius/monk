
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcVsh17lLX9t2d1jF-8cDEzwRWh_w5WIY",
  authDomain: "studio-8703515322-12e3a.firebaseapp.com",
  projectId: "studio-8703515322-12e3a",
  storageBucket: "studio-8703515322-12e3a.firebasestorage.app",
  messagingSenderId: "740569486932",
  appId: "1:740569486932:web:8de1c9dbf45c69502effc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
