import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyCtY51uD0AMy8lbsACoOsSTtUmaCxRyr2c",
    authDomain: "tickets-1eaad.firebaseapp.com",
    projectId: "tickets-1eaad",
    storageBucket: "tickets-1eaad.appspot.com",
    messagingSenderId: "116733951028",
    appId: "1:116733951028:web:e32b82cbe0942a84831e61",
    measurementId: "G-VHTS1BYWSF"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage};