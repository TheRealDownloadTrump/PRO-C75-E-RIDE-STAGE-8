import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCTZlpVrVpH3O76AUHmzTXK0Q-KIlYigxo",
  authDomain: "byjus-eapp.firebaseapp.com",
  projectId: "byjus-eapp",
  storageBucket: "byjus-eapp.appspot.com",
  messagingSenderId: "747500765212",
  appId: "1:747500765212:web:8889595b6dff670ebf1fd9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
