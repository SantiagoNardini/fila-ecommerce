import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYdDGSUTrg7N7fL1pNxrhS8n1s3nAEKNE",
  authDomain: "ecommerce-fila.firebaseapp.com",
  projectId: "ecommerce-fila",
  storageBucket: "ecommerce-fila.appspot.com",
  messagingSenderId: "1048174293412",
  appId: "1:1048174293412:web:71829dc7305164723b5131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

