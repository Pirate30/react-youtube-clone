// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZwaLcCFDgaE0eAWywg1Y0FeSM0w2hsuU",
  authDomain: "react--clone-4935f.firebaseapp.com",
  projectId: "react--clone-4935f",
  storageBucket: "react--clone-4935f.appspot.com",
  messagingSenderId: "573713398465",
  appId: "1:573713398465:web:630df2bd722677c3dff240",
  measurementId: "G-6BDKB8EFBE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
