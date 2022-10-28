import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// অনেক try করছি ভাই, কিন্তু env কাজ করেনাই।

const firebaseConfig = {
  apiKey: "AIzaSyAEXOddKXptu2kJyLeGgYDSQ84IhI9QRf8",
  authDomain: "it-five.firebaseapp.com",
  projectId: "it-five",
  storageBucket: "it-five.appspot.com",
  messagingSenderId: "1000083448809",
  appId: "1:1000083448809:web:de931bb2e9476e0ec0e178",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
