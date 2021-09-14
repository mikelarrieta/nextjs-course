import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
   apiKey: "AIzaSyAcx4Zej5RPkOjLLxUH_GFLjWllaVNh09E",
   authDomain: "fireship-nextjs-course-fbba8.firebaseapp.com",
   projectId: "fireship-nextjs-course-fbba8",
   storageBucket: "fireship-nextjs-course-fbba8.appspot.com",
   messagingSenderId: "447854776166",
   appId: "1:447854776166:web:653e0f7b6c64a536e902a7",
   measurementId: "G-9MH2XPSNXZ"
 };

 if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

 export const auth = firebase.auth();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 export const firestore = firebase.firestore();
 export const storage = firebase.storage();