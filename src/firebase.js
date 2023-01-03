import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAz_1TwdVYvBOGVoBTEpOcjpf1hSPq6bYI",
    authDomain: "qrgenerator-4c228.firebaseapp.com",
    projectId: "qrgenerator-4c228",
    storageBucket: "qrgenerator-4c228.appspot.com",
    messagingSenderId: "945752814451",
    appId: "1:945752814451:web:72d9947e08257b44104b06",
    measurementId: "G-86R0W3H2PY"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);