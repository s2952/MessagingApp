// Importar Firebase y las dependencias necesarias
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Configuración de Firebase usando secretos vinculados desde el entorno
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, // Clave de API desde los secretos
  authDomain: process.env.FIREBASE_AUTH_DOMAIN, // Dominio de autenticación desde los secretos
  projectId: process.env.FIREBASE_PROJECT_ID, // ID del proyecto desde los secretos
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, // Bucket de almacenamiento desde los secretos
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID, // ID del remitente de mensajes desde los secretos
  appId: process.env.FIREBASE_APP_ID, // ID de la aplicación desde los secretos
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para iniciar sesión con correo y contraseña
export function loginWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Bienvenido, ${user.email}!`);
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}

// Función para registrar nuevos usuarios
export function registerWithEmail(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Registro exitoso, ${user.email}!`);
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}

// Función para iniciar sesión con Google
export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Bienvenido, ${user.displayName}!`);
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}
