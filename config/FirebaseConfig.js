// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meetmate-alpha.firebaseapp.com",
  projectId: "meetmate-alpha",
  storageBucket: "meetmate-alpha.appspot.com",
  messagingSenderId: "361168440845",
  appId: "1:361168440845:web:30cee144f6c80e41064f44",
  measurementId: "G-NJHZKKBNV4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);