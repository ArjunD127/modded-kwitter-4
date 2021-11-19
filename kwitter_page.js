const firebaseConfig = {
    apiKey: "AIzaSyAf6ZbsQ35U9vh49ZiPOjKEpdG_qa9ggTk",
    authDomain: "kwitter-e7705.firebaseapp.com",
    databaseURL: "https://kwitter-e7705-default-rtdb.firebaseio.com",
    projectId: "kwitter-e7705",
    storageBucket: "kwitter-e7705.appspot.com",
    messagingSenderId: "419099197859",
    appId: "1:419099197859:web:c1f120fa93be9a40059a16"
  };

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send() {
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          uid : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
