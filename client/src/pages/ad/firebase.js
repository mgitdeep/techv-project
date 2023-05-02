import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA1kN5vkP11etBH92IgLH38bZu93NDVhiE",
  authDomain: "weshop-c318c.firebaseapp.com",
  projectId: "weshop-c318c",
  storageBucket: "weshop-c318c.appspot.com",
  messagingSenderId: "627806783961",
  appId: "1:627806783961:web:659d6242394888dd34b1c8"
};

firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage()
export default firebase
