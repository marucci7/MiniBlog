import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeqr3igWyMicEXNN7LbPAGg4UrEvu4k7I",
  authDomain: "miniblog-aa762.firebaseapp.com",
  projectId: "miniblog-aa762",
  storageBucket: "miniblog-aa762.appspot.com",
  messagingSenderId: "472115556360",
  appId: "1:472115556360:web:66ed23eca759c585e821bd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
