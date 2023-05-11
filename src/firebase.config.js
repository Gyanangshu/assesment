
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVcyV5ewIwB-Z3tqVzGYfU8hT8ZLftbcY",
    authDomain: "assesment-c23c7.firebaseapp.com",
    projectId: "assesment-c23c7",
    storageBucket: "assesment-c23c7.appspot.com",
    messagingSenderId: "468089829175",
    appId: "1:468089829175:web:a20f8a176a893aef874cb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

