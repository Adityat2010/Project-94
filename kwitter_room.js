
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDLk2EdB5S4EHiRWpcK6ozxJWRVoc0_138",
      authDomain: "kwitter-87a1d.firebaseapp.com",
      databaseURL: "https://kwitter-87a1d-default-rtdb.firebaseio.com",
      projectId: "kwitter-87a1d",
      storageBucket: "kwitter-87a1d.appspot.com",
      messagingSenderId: "221302625820",
      appId: "1:221302625820:web:8a0232ab8b0983238ff1d9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
