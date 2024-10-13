import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBP2dYxZD57qtF04-fvGV4-MN6YKMa-tjI",
    authDomain: "nguyenxuanhai-3b943.firebaseapp.com",
    projectId: "nguyenxuanhai-3b943",
    storageBucket: "nguyenxuanhai-3b943.appspot.com",
    messagingSenderId: "638945391635",
    appId: "1:638945391635:web:92be6b690181f974bd7be6",
    measurementId: "G-G9R4BH7YXQ"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
