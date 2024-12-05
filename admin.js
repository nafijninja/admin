// Firebase Configuration (আপনার Firebase প্রকল্পের কনফিগারেশন সেটিংস)

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



// Firebase ইনিশিয়ালাইজ
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ডেটা যোগ বা আপডেট করার ফাংশন
function addOrUpdateData() {
    const key = document.getElementById('keyInput').value;
    const value = document.getElementById('valueInput').value;

    if (key && value) {
        // Firebase এ ডেটা যোগ বা আপডেট করা
        database.ref(key).set(value)
        .then(() => alert('Data added/updated successfully!'))
        .catch(error => alert('Error: ' + error.message));
    } else {
        alert('Please enter both key and value.');
    }
}

// ডেটা মুছে ফেলার ফাংশন
function deleteData() {
    const key = document.getElementById('deleteKeyInput').value;

    if (key) {
        // Firebase থেকে ডেটা মুছে ফেলা
        database.ref(key).remove()
        .then(() => alert('Data deleted successfully!'))
        .catch(error => alert('Error: ' + error.message));
    } else {
        alert('Please enter a key to delete.');
    }
}

// Firebase থেকে ডেটা দেখানোর ফাংশন
function displayData() {
    database.ref().on('value', snapshot => {
        const data = snapshot.val();
        document.getElementById('databaseContent').innerText = JSON.stringify(data, null, 2); // ডেটা সুন্দরভাবে প্রদর্শন করা
    });
}

// পেজ লোড হওয়ার পর ডেটা দেখানো
displayData();
