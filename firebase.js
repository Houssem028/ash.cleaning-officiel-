// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJxzFknapSh0fnPfIXwEEK3OijSKlqxco",
  authDomain: "admin-ash-f622c.firebaseapp.com",
  projectId: "admin-ash-f622c",
  storageBucket: "admin-ash-f622c.appspot.com",
  messagingSenderId: "76505742154",
  appId: "1:76505742154:web:8aa69b74f845f339cb1fb3",
  measurementId: "G-KVNZ1KM5ZZ"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// التصدير لاستخدامه في صفحات أخرى
export const auth = firebase.auth();
export const db = firebase.firestore();
