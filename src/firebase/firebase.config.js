import { initializeApp } from "firebase/app";



// our web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIz62XdZCAsMuAN8-Yw_qT7Ot225Ge7Hc",
    authDomain: "social-job-task.firebaseapp.com",
    projectId: "social-job-task",
    storageBucket: "social-job-task.appspot.com",
    messagingSenderId: "492250669828",
    appId: "1:492250669828:web:931e18b1c5e15b426da651"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;