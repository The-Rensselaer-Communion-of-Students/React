
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore'
import "firebase/storage"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDeTbRi8pRk046daBrNzNHTVcmRLQWOAls",
  authDomain: "final-itws-project.firebaseapp.com",
  projectId: "final-itws-project",
  storageBucket: "final-itws-project.appspot.com",
  messagingSenderId: "757901724574",
  appId: "1:757901724574:web:553bd14a418ff45c00248f",
  measurementId: "G-WW8X00T9PP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const firestore = getFirestore(app);
const firestore = firebase.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const auth=getAuth(app)
export const storage = getStorage(app);