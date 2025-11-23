
// firebase.js (module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBH6hhP7-JUZJdTirFGA-6W9_unIC1k6Lo",
  authDomain: "newpro-fa54b.firebaseapp.com",
  projectId: "newpro-fa54b",
  storageBucket: "newpro-fa54b.firebasestorage.app",
  messagingSenderId: "541759932178",
  appId: "1:541759932178:web:4b3feedfbb5a10b33e55cb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
