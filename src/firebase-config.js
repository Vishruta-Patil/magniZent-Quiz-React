import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "magnizent-quiz",
    storageBucket: "magnizent-quiz.appspot.com",
    messagingSenderId: "989622307537",
    appId: "1:989622307537:web:a9c4a39569e75ad420d3f0",
    measurementId: "G-39PLPKNV6E"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)