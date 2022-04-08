
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)