import { boot } from "quasar/wrappers";
import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async () => {
  // something to do
  const firebaseConfig = {
    apiKey: "AIzaSyBG5I8iSkSRRHtqqHj2RGrb6w5LKGyd5yA",
    authDomain: "turiba-18387.firebaseapp.com",
    projectId: "turiba-18387",
    storageBucket: "turiba-18387.appspot.com",
    messagingSenderId: "50685434499",
    appId: "1:50685434499:web:f697d20c7affb8f31e59b6",
    measurementId: "G-GNLWE1NRJ9",
  };
  firebase.initializeApp(firebaseConfig);
});
export { firebase };
