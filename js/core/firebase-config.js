const firebaseConfig = {
  apiKey: "AIzaSyAhdcT_rKhd9_P96oqLYQnSYA7nRUIsRGk",
  authDomain: "hola-jordy.firebaseapp.com",
  projectId: "hola-jordy",
  storageBucket: "hola-jordy.firebasestorage.app",
  messagingSenderId: "752435616332",
  appId: "1:752435616332:web:1ba7bd210f0bc79e1c72e9",
  measurementId: "G-2Z3CPFS9FY"
};

// Initialiseer Firebase (compat-modus)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// 🚀 Zorg ervoor dat de gebruiker bij elke pagina-refresh opnieuw moet inloggen:
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .catch((error) => {
    console.error("Fout bij instellen van sessie-persistentie:", error);
  });
