import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { getFirestore, doc, getDoc } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
