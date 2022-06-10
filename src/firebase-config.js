import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBq92ec_feiK9S11YpB8_mz5MIi5v_t7Gc",
    authDomain: "magnizent-quiz.firebaseapp.com",
    projectId: "magnizent-quiz",
    storageBucket: "magnizent-quiz.appspot.com",
    messagingSenderId: "989622307537",
    appId: "1:989622307537:web:a9c4a39569e75ad420d3f0",
    measurementId: "G-39PLPKNV6E"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)