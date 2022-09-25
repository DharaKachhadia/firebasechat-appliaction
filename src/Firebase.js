// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5t6FjH9I1Cdjdc4o3nprpihGIn2eBATM",
  authDomain: "chat-b1759.firebaseapp.com",
  projectId: "chat-b1759",
  storageBucket: "chat-b1759.appspot.com",
  messagingSenderId: "564649044166",
  appId: "1:564649044166:web:57d09a1e8677c7d3724fc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()