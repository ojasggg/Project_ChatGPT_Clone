import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5SK6hwfRGu0dVXGRjn0iPwDqZkcLSjuU",
  authDomain: "chatgpt-clone-deba1.firebaseapp.com",
  projectId: "chatgpt-clone-deba1",
  storageBucket: "chatgpt-clone-deba1.appspot.com",
  messagingSenderId: "219945156469",
  appId: "1:219945156469:web:67a80e789fce2cd768dd3c",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
