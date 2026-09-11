// Firebase Configuratie & Initialisatie
const firebaseConfig = {
  apiKey: "JOUW_API_KEY_HIER",
  authDomain: "jouw-project.firebaseapp.com",
  projectId: "jouw-project-id",
  storageBucket: "jouw-project.appspot.com",
  messagingSenderId: "JOUW_SENDER_ID",
  appId: "JOUW_APP_ID"
};

// Initialiseer Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
