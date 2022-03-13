import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnFNCZW8RbUnZ6aJbDmTo3TYQFBHoKh2M",
  authDomain: "gallery-9e321.firebaseapp.com",
  projectId: "gallery-9e321",
  storageBucket: "gallery-9e321.appspot.com",
  messagingSenderId: "346039256624",
  appId: "1:346039256624:web:854f46a4824d3b35314ff5"
};

export const app = initializeApp(firebaseConfig);

 
 