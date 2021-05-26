 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDd_CmmbBfRCxoicE3TC5YO0_E7suDGCzk",
    authDomain: "snapbook-971aa.firebaseapp.com",
    databaseURL: "https://snapbook-971aa-default-rtdb.firebaseio.com",
    projectId: "snapbook-971aa",
    storageBucket: "snapbook-971aa.appspot.com",
    messagingSenderId: "1046565702409",
    appId: "1:1046565702409:web:b66c5e7bc93dd4759921d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 

  function addroom(){
    roomname=document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
      key:"value"
    })}
   

