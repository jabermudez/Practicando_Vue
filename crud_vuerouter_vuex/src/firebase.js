import firebase from 'firebase/app'

import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA1V_vU1V3VDPubyePVZ27IuMSUO5Gr1xg",
  authDomain: "crud-vue-19455.firebaseapp.com",
  projectId: "crud-vue-19455",
  storageBucket: "crud-vue-19455.appspot.com",
  messagingSenderId: "532322889728",
  appId: "1:532322889728:web:ca1e8b79b6cccc66b3e8e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db}