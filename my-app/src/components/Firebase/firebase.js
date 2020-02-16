import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// // import 'firebase/analytics'
// import {initializeApp} from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXXOmDYAp_ZBq0rWlgVUN0dwep1__SHUU",
    authDomain: "charitypass-3c4a3.firebaseapp.com",
    databaseURL: "https://charitypass-3c4a3.firebaseio.com",
    projectId: "charitypass-3c4a3",
    storageBucket: "charitypass-3c4a3.appspot.com",
    messagingSenderId: "153794127754",
    appId: "1:153794127754:web:cd41dd254cc83f67528a73",
    measurementId: "G-24BBGCQ975"
};

// Initialize Firebase
export class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.data = app.firestore();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

// app.analytics();
// export const data = app.firestore();

export default Firebase