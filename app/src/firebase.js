// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWrd7hPy2dtdWOwVyXUuqpxgXL7500dts",
  authDomain: "upload-f0a4e.firebaseapp.com",
  projectId: "upload-f0a4e",
  storageBucket: "upload-f0a4e.appspot.com",
  messagingSenderId: "1039436625257",
  appId: "1:1039436625257:web:6278106445a269e9fc79f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);