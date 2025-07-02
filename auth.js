
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpI-p85DKzibitodDSLy9u_IX9oaUVCKY",
  authDomain: "ruinstudiosco.firebaseapp.com",
  projectId: "ruinstudiosco",
  storageBucket: "ruinstudiosco.firebasestorage.app",
  messagingSenderId: "98091317764",
  appId: "1:98091317764:web:f20ff14fef18cba3c59351",
  measurementId: "G-4R320QYSBM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

window.registerUser = () => {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Registration successful!");
    })
    .catch(error => {
      alert(error.message);
    });
};

window.loginUser = () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Login successful!");
    })
    .catch(error => {
      alert(error.message);
    });
};

window.logoutUser = () => {
  signOut(auth).then(() => {
    alert("Logged out");
  });
};
