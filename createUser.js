import firebase from "firebase/app";
import "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCPAhhq_NtSjgx6WSiNsgfxe9Ye6Ki1I2o",
    authDomain: "scheduler-24611.firebaseapp.com",
    projectId: "scheduler-24611",
    storageBucket: "scheduler-24611.appspot.com",
    messagingSenderId: "256823867664",
    appId: "1:256823867664:web:14b2b38899e28afe49cd95",
    measurementId: "G-9GDEKL97X7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




class User {
    constructor(name, email, appts) {  // Constructor
      this.email = email;
      this.name = name;
      this.appts = appts;
    }
  }


  const laurie = new User('laurie', "laurie@SpeechGrammarList.mail",["12/15/2021"],["1730"]);