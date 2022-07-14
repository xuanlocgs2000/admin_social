import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGYVZSg1ZjLfz7mY97XUHA48AQtJKzNpo",
    authDomain: "fir-auth-3b827.firebaseapp.com",
    databaseURL: "https://fir-auth-3b827-default-rtdb.firebaseio.com",
    projectId: "fir-auth-3b827",
    storageBucket: "fir-auth-3b827.appspot.com",
    messagingSenderId: "368771310137",
    appId: "1:368771310137:web:0799331abf5a9e37fca3e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);