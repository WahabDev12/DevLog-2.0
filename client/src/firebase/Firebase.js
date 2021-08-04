import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzG2NVJIjZ5sJ0h_NCFxFSfN4FwBXjeGs",
    authDomain: "devlog-ac933.firebaseapp.com",
    projectId: "devlog-ac933",
    storageBucket: "devlog-ac933.appspot.com",
    messagingSenderId: "866361081881",
    appId: "1:866361081881:web:66471d20bd46c18c96aa88"
};

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const auth  = firebase.auth();
 
export default app; 