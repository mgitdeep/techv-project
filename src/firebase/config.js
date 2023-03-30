
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARQvwshm8w_UbWwX7r1S-_ZaOX5U1lkME",
  authDomain: "sellitnow-a8adb.firebaseapp.com",
  projectId: "sellitnow-a8adb",
  storageBucket: "sellitnow-a8adb.appspot.com",
  messagingSenderId: "1005334788302",
  appId: "1:1005334788302:web:a83499d54e580f07cb789f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app

