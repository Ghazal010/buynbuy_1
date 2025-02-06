// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQpEKyxfu1WytAIn5pJYgRp0Ayqzy3zUw",
  authDomain: "buynbuy-gs.firebaseapp.com",
  projectId: "buynbuy-gs",
  storageBucket: "buynbuy-gs.firebasestorage.app",
  messagingSenderId: "384287691470",
  appId: "1:384287691470:web:ee9313a56393dcf821f69f"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}