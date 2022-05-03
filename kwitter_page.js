var firebaseConfig = {
    apiKey: "AIzaSyCeBvM5Z0_xbzNw56HfKrJQpLG4c0OdIto",
    authDomain: "class-94-59941.firebaseapp.com",
    databaseURL: "https://class-94-59941-default-rtdb.firebaseio.com",
    projectId: "class-94-59941",
    storageBucket: "class-94-59941.appspot.com",
    messagingSenderId: "246065634545",
    appId: "1:246065634545:web:16f1bc7704969677ce1d50",
    measurementId: "G-QMKED4KL1L"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
room_name= localStorage.getItem("room_name")

function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
name: user_name,
message:msg,
like:0
    
    });
    document.getElementById("msg").value="";
    


    
}
                                                                                                                                                                                                                                                                                                                                                                                                                     

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
 
//End code
 } });  }); }
getData();
getdata();






function updatelike(message_id){
    console.log("clicked on like button-" + message_id)
    button_id = message_id
    likes = document.getElementById(button_id).value
    updated_likes= Number(likes) + 1
    console.log(updated_likes)
     firebase.database().ref(room_name).child(message_id).update({
         likes: updated_likes
     })
}



function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}



