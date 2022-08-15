// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuhIy_eaDjAVMfhWFduD4H2X6TJMTVZlA",
    authDomain: "cargonproduction.firebaseapp.com",
    projectId: "cargonproduction",
    storageBucket: "cargonproduction.appspot.com",
    messagingSenderId: "221956387387",
    appId: "1:221956387387:web:46771f28d2e92f0aa9a21e",
    measurementId: "G-RYFKVC4104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app