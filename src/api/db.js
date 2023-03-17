import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyANVgsSp6BaSvafPz64VrLE6p3ZKIHkla0',
  authDomain: 'flashcard-local.firebaseapp.com',
  projectId: 'flashcard-local',
  storageBucket: 'flashcard-local.appspot.com',
  messagingSenderId: '551018816172',
  appId: '1:551018816172:web:8d36269fe2520f64e67509',
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = getAuth(app);

export const categories = db.collection('categories');
