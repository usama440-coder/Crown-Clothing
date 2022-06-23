import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlsi2k7yiYG7r5mzJrgpbWhuxAgJoBz64",
  authDomain: "crown-clothing-db-2a942.firebaseapp.com",
  projectId: "crown-clothing-db-2a942",
  storageBucket: "crown-clothing-db-2a942.appspot.com",
  messagingSenderId: "162093283794",
  appId: "1:162093283794:web:f0eaf44671542f7b2a700b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error in creating a user " + error.message);
    }
  }

  // if user data exist
  return userDocRef;
};
