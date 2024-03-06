// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage}  from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDA1jPcCoEqmjSnm1qHR7O56rMmGNw6yX4",
  authDomain: "voluntrix-app.firebaseapp.com",
  projectId: "voluntrix-app",
  storageBucket: "voluntrix-app.appspot.com",
  messagingSenderId: "127791978657",
  appId: "1:127791978657:web:2301bbbf1cc8b2633138e0",
  measurementId: "G-XF0CT3PM8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const imageDb = getStorage(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export {auth,provider};

