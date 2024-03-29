// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://jkdelara-default-rtdb.firebaseio.com",
    projectId: "jkdelara",
    storageBucket: "jkdelara.appspot.com",
    messagingSenderId: "384998070377",
    appId: "1:384998070377:web:b0bc0d4d675d8c01b92af8",
    measurementId: "G-0TQCCT1N37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getDatabase(app);
