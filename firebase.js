import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA36nw-1uJMgmF4UlxD7q69R9iT-RDkkDo",
  authDomain: "atmosolcus.firebaseapp.com",
  projectId: "atmosolcus",
  storageBucket: "atmosolcus.firebasestorage.app",
  messagingSenderId: "130898331720",
  appId: "1:130898331720:web:d75f7169fe7780eded307d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
