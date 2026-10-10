import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  
  apiKey: "AIzaSyB5IMzV__go8uP6cuv_DRPg3JVNdrTJH_0",
  authDomain: "estimateai-firebase-project.firebaseapp.com",
  projectId: "estimateai-firebase-project",
  storageBucket: "estimateai-firebase-project.firebasestorage.app",
  messagingSenderId: "435593340100",
  appId: "1:435593340100:web:9d1ce44bb7b8de5ebd5591"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();