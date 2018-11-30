import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBNNLoyOC41QfQzIoEotvA8HimYEWtyI60",
  authDomain: "messageme-dd7c6.firebaseapp.com",
  databaseURL: "https://messageme-dd7c6.firebaseio.com",
  projectId: "messageme-dd7c6",
  storageBucket: "messageme-dd7c6.appspot.com",
  messagingSenderId: "770251272827"
};

firebase.initializeApp(config);

export default firebase;
