// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-bns_8jjMK6MbZQ28G8JQJIMUiftFkXM",
  authDomain: "react-chat-7bd73.firebaseapp.com",
  projectId: "react-chat-7bd73",
  storageBucket: "react-chat-7bd73.appspot.com",
  messagingSenderId: "57168597236",
  appId: "1:57168597236:web:fb3289d7cd76acfe42cea1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
export const storage = getStorage()
export const db = getFirestore()