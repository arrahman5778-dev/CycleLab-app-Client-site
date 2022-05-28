// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlFZZ3OGYW6UpL9ed4SDtlbT8vBCgs_vo",
  authDomain: "cycle-shop-85e03.firebaseapp.com",
  projectId: "cycle-shop-85e03",
  storageBucket: "cycle-shop-85e03.appspot.com",
  messagingSenderId: "578223346003",
  appId: "1:578223346003:web:db169ce172177c83ca51a6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
