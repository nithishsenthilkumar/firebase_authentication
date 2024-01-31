import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA3ChnbDU2VoEa3AmzQYNzzla5q95y2ris",
  authDomain: "loginpage-8a7c2.firebaseapp.com",
  projectId: "loginpage-8a7c2",
  storageBucket: "loginpage-8a7c2.appspot.com",
  messagingSenderId: "455083853871",
  appId: "1:455083853871:web:f960c0fd594b1643605eda",
  measurementId: "G-ZD4T0CM939"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };