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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      mg = document.getElementById("mg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:mg,
            like:0
      });
      document.getElementById("mg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-info' id="+firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
    } });  }); }
getData();

function updateLike(message_id){
    console.log("clicked on like button - " + message_id);
    button_id = messsage_id;  

    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes});
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}