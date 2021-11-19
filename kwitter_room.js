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

  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("roomname = " + Room_names);
    var row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}