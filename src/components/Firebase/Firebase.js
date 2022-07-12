
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDI7hTdeIBdz5OuzgxR4ACMWAgjTrimKyA",
    authDomain: "benefit-wise-by-cz.firebaseapp.com",
    projectId: "benefit-wise-by-cz",
    storageBucket: "benefit-wise-by-cz.appspot.com",
    messagingSenderId: "662486163230",
    appId: "1:662486163230:web:b21044bbb570294708b30f",
    measurementId: "G-TQQEQ9M6BK"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase;