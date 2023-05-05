// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

// Sign in with an email and password
export const signInUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log(user);
    // User is signed in.
    const userData = { uid: user.uid, email: user.email };
    localStorage.setItem("user", JSON.stringify(userData));
  } else {
    // User is not signed in.
    localStorage.removeItem("user");
  }
});
