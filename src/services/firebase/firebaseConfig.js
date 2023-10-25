// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXRhltvnnWYYK4vOvurgTF7F0oe0L-bHY",
  authDomain: "e-commerce-coderhouse-499b4.firebaseapp.com",
  projectId: "e-commerce-coderhouse-499b4",
  storageBucket: "e-commerce-coderhouse-499b4.appspot.com",
  messagingSenderId: "402181958051",
  appId: "1:402181958051:web:9491ec6fd2554b94059216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


// Agrega un console.log para verificar la conexión
console.log('Firebase está conectado:', app);