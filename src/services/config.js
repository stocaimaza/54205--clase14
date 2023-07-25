import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDex-bQfg9cfehn6VjIrmiLl-d-csukSco",
  authDomain: "coder54205-a7e07.firebaseapp.com",
  projectId: "coder54205-a7e07",
  storageBucket: "coder54205-a7e07.appspot.com",
  messagingSenderId: "334887888353",
  appId: "1:334887888353:web:c9860dbe9894d43dcb9ea0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);