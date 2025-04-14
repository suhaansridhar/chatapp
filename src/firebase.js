// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR1FQ8JHZkwTWIExgiKFhwwR5IBtT2KAg",
  authDomain: "chatapp-eddd3.firebaseapp.com",
  projectId: "chatapp-eddd3",
  storageBucket: "chatapp-eddd3.firebasestorage.app",
  messagingSenderId: "824691074842",
  appId: "1:824691074842:web:8e128f15608b3b66ca6ea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);