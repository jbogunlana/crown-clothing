import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

// connection to firebase documents
const db = getFirestore();

// adding collection document into the firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  // collection reference
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((objectToAdd) => {
    // custom id
    const docRef = doc(collectionRef, objectToAdd.title.toLowerCase());
    batch.set(docRef, objectToAdd);
  });
  await batch.commit();
  console.log("done");
};

// getting collection document from firestore
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((map, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    map[title.toLowerCase()] = items;
    return map;
  }, {});

  return categoryMap;
};

// alternative way of fetching document in firestore as javascript object
// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, "categories");

//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);

//   const categoryMap = {};

//   querySnapshot.docs.forEach((docSnapshot) => {
//     const data = docSnapshot.data();

//     const title = data.title;

//     const items = data.items;

//     categoryMap[title.toLowerCase()] = items;
//   });

//   return categoryMap;
// };

// creating a user document in firestore
export const createUserDocumentFromAuth = async (
  userAuth,
  additonalInformation = {},
) => {
  if (!userAuth) return;
  // point to data location
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  // contains actual retrieved state
  const userSnapshot = await getDoc(userDocRef);

  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additonalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// creating user document using signin with email and password
export const createAuthUserWithEmailAndPassword = async ({
  email,
  password,
}) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async ({
  email,
  password,
}) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// signout for users
export const signOutUser = async () => await signOut(auth);

// auth listener
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
