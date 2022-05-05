var firebaseConfig = {
    apiKey: "AIzaSyDNWJ8cbYzdIvI68zf5Y8tedHNrsAj_NFI",
    authDomain: "kwitter-37944.firebaseapp.com",
    databaseURL: "https://kwitter-37944-default-rtdb.firebaseio.com",
    projectId: "kwitter-37944",
    storageBucket: "kwitter-37944.appspot.com",
    messagingSenderId: "305939564656",
    appId: "1:305939564656:web:f67fc2f8559eeac5750cb5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addroom(){
        room_name = document.getElementById("room_name").ariaValueMax;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();