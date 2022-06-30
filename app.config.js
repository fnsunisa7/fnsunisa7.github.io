import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHMgxmTU7cayT3ijEEDSpMW1bUZdjIF6M",
  authDomain: "fnsunisa7-github-io.firebaseapp.com",
  projectId: "fnsunisa7-github-io",
  storageBucket: "fnsunisa7-github-io.appspot.com",
  messagingSenderId: "570405137697",
  appId: "1:570405137697:web:0732475a63c97f206b2260",
  measurementId: "G-9ZGFM0RG9Q"
};

const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  analytics = getAnalytics(app);
}
