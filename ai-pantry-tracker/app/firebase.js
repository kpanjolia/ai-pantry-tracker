// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2KYMhDL94SZiSf-u5Cwdac8lKP4uJ9ow",
  authDomain: "inventory-tracker-e6278.firebaseapp.com",
  projectId: "inventory-tracker-e6278",
  storageBucket: "inventory-tracker-e6278.appspot.com",
  messagingSenderId: "220831862353",
  appId: "1:220831862353:web:062ef64e967f3c7029f270",
  measurementId: "G-Q77TWMLXCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { firestore };