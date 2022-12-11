// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDwZ9e4DUTsm57qF5T3VaacKKScxtWU4sg",
//   authDomain: "trello-6ab93.firebaseapp.com",
//   projectId: "trello-6ab93",
//   storageBucket: "trello-6ab93.appspot.com",
//   messagingSenderId: "622062631295",
//   appId: "1:622062631295:web:3d254732708e34703c024a",
//   databaseURL: "https://trello-6ab93-default-rtdb.firebaseio.com/"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwZ9e4DUTsm57qF5T3VaacKKScxtWU4sg",
  authDomain: "trello-6ab93.firebaseapp.com",
  databaseURL: "https://trello-6ab93-default-rtdb.firebaseio.com",
  projectId: "trello-6ab93",
  storageBucket: "trello-6ab93.appspot.com",
  messagingSenderId: "622062631295",
  appId: "1:622062631295:web:3d254732708e34703c024a",
  measurementId: "G-0YHJEL85VM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
