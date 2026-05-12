import { initializeApp } from "firebase/app";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBraSLX_RRxss1aOmq_TLqiAORAYdTEsSg",
  authDomain: "smart-queue-system-1069f.firebaseapp.com",
  projectId: "smart-queue-system-1069f",
  storageBucket: "smart-queue-system-1069f.firebasestorage.app",
  messagingSenderId: "294384220220",
  appId: "1:294384220220:web:98280463aa069e5fe3eb39",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;