// Initialize Firebase (add your Firebase config here)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// DOM Elements
const loginSection = document.getElementById('login-section');
const chatSection = document.getElementById('chat-section');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const userEmail = document.getElementById('user-email');
const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Authentication
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        loginSection.style.display = 'none';
        chatSection.style.display = 'block';
        userEmail.textContent = user.email;
    } else {
        loginSection.style.display = 'block';
        chatSection.style.display = 'none';
    }
});

loginButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => alert(error.message));
});

signupButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => alert(error.message));
});

// Messaging (to be implemented)
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== "") {
        messageInput.value = "";
        // Save message to Firebase (to be implemented)
    }
});