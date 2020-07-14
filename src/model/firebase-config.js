import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCw9jVKbSSL1WSf-5V5GbnraTVp8GgAyZs",
  authDomain: "rollercoastercorp-2020.firebaseapp.com",
  databaseURL: "https://rollercoastercorp-2020.firebaseio.com",
  projectId: "rollercoastercorp-2020",
  storageBucket: "rollercoastercorp-2020.appspot.com",
  messagingSenderId: "162907901723",
  appId: "1:162907901723:web:5304bbed646caffcc54dbe"
};

const dblink = firebase.initializeApp(firebaseConfig);

export default dblink