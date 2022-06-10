import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

//create/update data: setDoc, read data: getDoc.
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// using dotenv cause problem with firestore connection
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAfkaEoN4dannnZX3YsdP4yuCbAf3DpZ9M',
  authDomain: 'e-commerce-eb572.firebaseapp.com',
  projectId: 'e-commerce-eb572',
  storageBucket: 'e-commerce-eb572.appspot.com',
  messagingSenderId: '538921367903',
  appId: '1:538921367903:web:81508213fdb4098ace1eea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


//google sign-in
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export function signInWithGooglePopup() {
  return signInWithPopup(auth, googleProvider);
}

//manual sign up
export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

//manual sign in
export async function signInAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}



//firestore
export async function createUserDocumentFromAuth(userAuth) {
  if (!userAuth) return;
  const { displayName, email, uid } = userAuth;

  const userDocRef = doc(db, `users/${uid}`);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const createdAt = new Date();
    setDoc(userDocRef, { displayName, email, createdAt })
      .then(() => console.log('created'))
      .catch((err) => console.log('not created', err));
  }

  return userDocRef;
}
