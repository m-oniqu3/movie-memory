// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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
    const userData = { uid: user.uid, email: user.email };
    localStorage.setItem("user", JSON.stringify(userData));
  } else {
    localStorage.removeItem("user");
  }
});

export const logOutUser = async () => {
  try {
    await signOut(auth);
    window.location.href = "/index.html";
  } catch (error) {
    console.log(error);
    alert("Error logging out. Please try again.");
  }
};

type Info = {
  posterPath: string;
  title: string;
  genres: {
    id: number;
    name: string;
  }[];
  releaseDate: string;
  description: string;
  id: number;
};

//const moviesCollection = collection(db, "movies");

export const saveData = async (uid: string, data: Info) => {
  try {
    const userDocument = doc(db, "movies", uid);

    // fetch the existing document data
    const docSnapshot = await getDoc(userDocument);
    const existingData = docSnapshot.exists() ? docSnapshot.data().movies : [];

    // add the new data to the existing data
    const newData = [...existingData, data];

    // set the merged data to the document
    await setDoc(userDocument, { movies: newData });

    console.log(newData);
  } catch (error) {
    console.log("Error saving data: ", error);
  }
};
