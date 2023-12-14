import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBHYcUv3DbQzzZx2bqutEOI3p7pQ3qBcZE",
    authDomain: "inmobiliaria-milanesio-7ef00.firebaseapp.com",
    projectId: "inmobiliaria-milanesio-7ef00",
    storageBucket: "inmobiliaria-milanesio-7ef00.appspot.com",
    messagingSenderId: "877270825023",
    appId: "1:877270825023:web:7197c9d44b86a6f9f3208a",
    measurementId: "G-GX85W67YX0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)