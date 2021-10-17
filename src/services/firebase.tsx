import firebase from 'firebase';

const devFirebaseConfig = {

};

const prodFirebaseConfig = {

};

const firebaseConfig =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? prodFirebaseConfig
    : devFirebaseConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const fire = firebase;
const firestore = fire.firestore();
export { fire as firebase, firestore };
