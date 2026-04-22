import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKwDkYCBrO1m5OIQUVhGd9po5lrzyXTNk",
  authDomain: "crwn-clothing-db-1ce85.firebaseapp.com",
  projectId: "crwn-clothing-db-1ce85",
  storageBucket: "crwn-clothing-db-1ce85.firebasestorage.app",
  messagingSenderId: "456007519166",
  appId: "1:456007519166:web:6f1b86f6ab3d0c199107ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// authentication
const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
