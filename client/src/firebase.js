// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogpost-90938.firebaseapp.com",
  projectId: "blogpost-90938",
  storageBucket: "blogpost-90938.appspot.com",
  messagingSenderId: "462648260848",
  appId: "1:462648260848:web:cf5fc187acbbd8e921ea35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);