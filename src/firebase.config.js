// import { configure } from "@testing-library/react";
// import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore';
// // import firebase from "firebase";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD1e34dm0F7gvx00FibRZsTTM22y7rk80s",
//   authDomain: "connect-charley.firebaseapp.com",
//   projectId: "connect-charley",
//   storageBucket: "connect-charley.appspot.com",
//   messagingSenderId: "901229849939",
//   appId: "1:901229849939:web:0a1d80a03eeeb5b22145a6",
// };

// // const app = initializeApp(firebaseConfig);


// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export default { auth, db };



// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// // const db=firebase.firestore();

// // // export const db = getFirestore(app);
// // export default db;



import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG_9s2JJDUeBLtMenyPtIBsVLupa8vRB8",
  authDomain: "fir-tutorial-ad573.firebaseapp.com",
  projectId: "fir-tutorial-ad573",
  storageBucket: "fir-tutorial-ad573.appspot.com",
  messagingSenderId: "459866772432",
  appId: "1:459866772432:web:b029523d67a8c9f1981fd5",
  measurementId: "G-2R62T7YE0E",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);