import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseConfig = {
    apiKey: "AIzaSyCtvjVoc0KhG7eEh4W8N8AqoWKhiz4rYzs",
    authDomain: "info2022-b3181.firebaseapp.com",
    databaseURL: "https://info2022-b3181-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "info2022-b3181",
    appId: "1:965024957089:web:0021fa0319aaa998a566e0",
  };
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  export default firebase.firestore();