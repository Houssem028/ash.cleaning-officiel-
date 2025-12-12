// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJxzFknapSh0fnPfIXwEEK3OijSKlqxco",
  authDomain: "admin-ash-f622c.firebaseapp.com",
  projectId: "admin-ash-f622c",
  storageBucket: "admin-ash-f622c.firebasestorage.app",
  messagingSenderId: "76505742154",
  appId: "1:76505742154:web:8aa69b74f845f339cb1fb3",
  measurementId: "G-KVNZ1KM5ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
