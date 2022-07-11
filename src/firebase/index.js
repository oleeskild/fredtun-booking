import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAzJXmNs4vWzHcpvgMKCPiNxutOIoZLVlI',
  authDomain: 'fredtunbooking.firebaseapp.com',
  projectId: 'fredtunbooking',
  storageBucket: 'fredtunbooking.appspot.com',
  messagingSenderId: '223706563035',
  appId: '1:223706563035:web:4b1986dda5974a597527fe',
  measurementId: 'G-YKHH24PRCW',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const popupSignIn = signInWithPopup;

export const db = getFirestore();
