// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8u8_i2rD6HEvU8Pi4CaZC916ny63ec3I",
    authDomain: "website-demo-24.firebaseapp.com",
    databaseURL: "https://website-demo-24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "website-demo-24",
    storageBucket: "website-demo-24.firebasestorage.app",
    messagingSenderId: "346117554665",
    appId: "1:346117554665:web:0c1536c7176517c8a4cb78",
    measurementId: "G-1GSKL8WVQJ"
};

// Firebase Initialization
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log("Firebase initialized successfully!");
