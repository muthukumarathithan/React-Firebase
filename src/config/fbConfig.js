import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {  
  apiKey: "AIzaSyCNPLWnTaPSsF_kCVN-CtxsvqKQpiVI76A",
  authDomain: "muthukumarathithan-b0d80.firebaseapp.com",
  databaseURL: "https://muthukumarathithan-b0d80.firebaseio.com",
  projectId: "muthukumarathithan-b0d80",
  storageBucket: "muthukumarathithan-b0d80.appspot.com",
  messagingSenderId: "1059839286383",
  appId: "1:1059839286383:web:834123291ff7c7345ec19a",
  measurementId: "G-4FQ2SF5NKN"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 