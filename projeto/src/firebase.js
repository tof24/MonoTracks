// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import {getFirestore, collection, getDocs } from "firebase/firestore"
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import {useState, useEffect} from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUkeDzuVPf-6lqWcqX3F_lb8QUz3N4L1U",
    authDomain: "monotracks-96c6c.firebaseapp.com",
    projectId: "monotracks-96c6c",
    storageBucket: "monotracks-96c6c.appspot.com",
    messagingSenderId: "806120229102",
    appId: "1:806120229102:web:857d6a4af5f67673c30bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const db = getFirestore(app);
export const colRef = collection(db, "Like");

export function firebase(email, password) {

    return createUserWithEmailAndPassword(auth, email, password)

}

export function login(email, password) {

    return signInWithEmailAndPassword(auth, email, password)

}

export function logout() {

    return signOut(auth);

}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {

      const unsub =  onAuthStateChanged(auth, user => {setCurrentUser(user)});
        return unsub;

    }, []);

    return currentUser;
}