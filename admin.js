// Firebase Configuration (আপনার Firebase প্রকল্পের কনফিগারেশন সেটিংস)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
