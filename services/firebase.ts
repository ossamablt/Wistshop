import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwjsmMYfY7ykh8NS6KxzajURBRyOh4Hpg",
    authDomain: "wistshop-d7d1e.firebaseapp.com",
    projectId: "wistshop-d7d1e",
    storageBucket: "wistshop-d7d1e.firebasestorage.app",
    messagingSenderId: "154147646817",
    appId: "1:154147646817:web:5a2b06c30965c61a132920"
  };

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 



