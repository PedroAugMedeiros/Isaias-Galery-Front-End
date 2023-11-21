import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyARZpZsh7PRvO-QqDaEqUTVR3JZR1IogP4",
    authDomain: "isaias-galery-91d76.firebaseapp.com",
    projectId: "isaias-galery-91d76",
    storageBucket: "isaias-galery-91d76.appspot.com",
    messagingSenderId: "203418564976",
    appId: "1:203418564976:web:ed3948e18cdb2eb6c5b7b5"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);