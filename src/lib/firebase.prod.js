import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// seed the database

// config
const config = {
  apiKey: "AIzaSyAoZhc1fIb6OW1c97wuWuPgu0Bq_qinGDg",
  authDomain: "netflix-d142e.firebaseapp.com",
  databaseURL: "https://netflix-d142e.firebaseapp.com",
  projectId: "netflix-d142e",
  storageBucket: "netflix-d142e.appspot.com",
  messagingSenderId: "8490637700",
  appId: "1:8490637700:web:4615a83a36549a892b65d1",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
