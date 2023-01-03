var firebaseConfig = {
      apiKey: "AIzaSyCxyfFEwiJprnFWeOTttBZIO0NbCMcWHac",
      authDomain: "kwitter-e75ae.firebaseapp.com",
      databaseURL: "https://kwitter-e75ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-e75ae",
      storageBucket: "kwitter-e75ae.appspot.com",
      messagingSenderId: "13203938816",
      appId: "1:13203938816:web:f0d7eb35590c1acea482e5"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"});

        localStorage.setItem("room_name", room_name);
        window.location="kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room- " + Room_names);
      row="<div class='room_name' id="+Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";

}