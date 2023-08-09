import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_hEi3ismw8yxo9bb431bP71NPFgxboIQ",
    authDomain: "blog-vue3-6aabc.firebaseapp.com",
    projectId: "blog-vue3-6aabc",
    storageBucket: "blog-vue3-6aabc.appspot.com",
    messagingSenderId: "375070443923",
    appId: "1:375070443923:web:527b2f56dd3d6498db8066"
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };