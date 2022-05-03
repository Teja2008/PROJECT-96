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
  document.getElementById("user_name").innerHTML="welcome"+ user_name + "!"

  function add_room(){
      roomname=document.getElementById("add_room").value
      firebase.database().ref("/").child(roomname).update({
          purpose:"roomname"
      })
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html"


      
}
function getdata(){
      firebase.database().ref("/").on('value', function (snapshot){
            document.getElementById("output").innerHTML="";
            snapshot.forEach(function (childsnapshot) {
                  childKey = childsnapshot.key;
                  room_names= childKey;
                  console.log("room name - " + room_names);
                  row ="<div class='room_name' id=" +room_names + "onclick='redirectToRoomName(this.id)'>#" + room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

            
            })              

            
      })
}
getdata();
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name" , name);
       window.location ="kwitter-page.html";
 }
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
  


