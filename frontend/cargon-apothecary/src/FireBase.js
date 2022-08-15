import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAo222dH16geofvcgtSLIfP-etfswEQn-A",
  authDomain: "cargon-apothecary.firebaseapp.com",
  projectId: "cargon-apothecary",
  storageBucket: "cargon-apothecary.appspot.com",
  messagingSenderId: "962169728287",
  appId: "1:962169728287:web:6b0296288db15bca27942a",
  measurementId: "G-NNM2Z9QZNP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore()
export {db}