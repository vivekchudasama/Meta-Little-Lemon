import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq3EwAT05hQObQR27osb9qsiru1Md-mSo",
  authDomain: "my-web-app-29dfc.firebaseapp.com",
  projectId: "my-web-app-29dfc",
  storageBucket: "my-web-app-29dfc.appspot.com",
  messagingSenderId: "617461171132",
  appId: "1:617461171132:web:f6b1c1e387a4021356a1b9",
  measurementId: "G-7JN6KMRBPT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
