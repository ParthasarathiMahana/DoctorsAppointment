import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAU2705fwMDpUyLwUbmy8SXGpWvgYgKevk",
  authDomain: "doctorappointment-7cca7.firebaseapp.com",
  projectId: "doctorappointment-7cca7",
  storageBucket: "doctorappointment-7cca7.appspot.com",
  messagingSenderId: "729229429197",
  appId: "1:729229429197:web:9fe1a3a2654180e3271c84"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;