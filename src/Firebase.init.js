// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXOddKXptu2kJyLeGgYDSQ84IhI9QRf8",
  authDomain: "it-five.firebaseapp.com",
  projectId: "it-five",
  storageBucket: "it-five.appspot.com",
  messagingSenderId: "1000083448809",
  appId: "1:1000083448809:web:de931bb2e9476e0ec0e178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
