// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk8wvX-bR5pgwmJ7CYECYWqtQAISeD-Qk",
  authDomain: "gamecenter-3fee6.firebaseapp.com",
  projectId: "gamecenter-3fee6",
  storageBucket: "gamecenter-3fee6.appspot.com",
  messagingSenderId: "963198522488",
  appId: "1:963198522488:web:615f9456579d8e92f8c98d"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app)
}