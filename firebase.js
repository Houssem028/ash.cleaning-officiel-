// firebase.js

// استدعاء Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// إعدادات مشروعك على Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJxzFknapSh0fnPfIXwEEK3OijSKlqxco",
  authDomain: "admin-ash-f622c.firebaseapp.com",
  projectId: "admin-ash-f622c",
  storageBucket: "admin-ash-f622c.firebasestorage.app",
  messagingSenderId: "76505742154",
  appId: "1:76505742154:web:8aa69b74f845f339cb1fb3",
  measurementId: "G-KVNZ1KM5ZZ"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// تهيئة Firestore وAuth
export const db = getFirestore(app);
export const auth = getAuth(app);
