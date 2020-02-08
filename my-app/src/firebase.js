import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/analytics'
// Your web app's Firebase configuration
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const data = firebase.firestore();

export default data