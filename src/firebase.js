import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArpnbpH27zKQ3jJ6TZVaxjdiHjkKGBBx0",
  authDomain: "techtalk-50225.firebaseapp.com",
  projectId: "techtalk-50225",
  storageBucket: "techtalk-50225.appspot.com",
  messagingSenderId: "609729224906",
  appId: "1:609729224906:web:4b21ab52e1b737705b1433",
  measurementId: "G-F963GM98KS"
};

initializeApp(firebaseConfig);

const db=getFirestore();

export default db;