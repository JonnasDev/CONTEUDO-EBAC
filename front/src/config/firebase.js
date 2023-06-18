import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD4SWr_5r66ivatJTcoRb2YTQn5dGS6W8I",
  authDomain: "tiktok-clone-41fc4.firebaseapp.com",
  projectId: "tiktok-clone-41fc4",
  storageBucket: "tiktok-clone-41fc4.appspot.com",
  messagingSenderId: "748368170904",
  appId: "1:748368170904:web:3ab0fd1ab158dfdb5925ed"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;