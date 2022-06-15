const firebaseConfig = {
    apiKey: "AIzaSyAhp1d2gQycN19v9DyPCxkpNI-osVQ3LRk",
    authDomain: "rid-s-chat-app.firebaseapp.com",
    databaseURL: "https://rid-s-chat-app-default-rtdb.firebaseio.com",
    projectId: "rid-s-chat-app",
    storageBucket: "rid-s-chat-app.appspot.com",
    messagingSenderId: "277978332781",
    appId: "1:277978332781:web:34fe1b3da2db7433208964"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("room_name")
    window.location="index.html"
}

user_name = localStorage.getItem("user")
    room_name = localStorage.getItem("room_name")
    console.log(room_name)
    function send () {
        msg = document.getElementById("inpute").value
        firebase.database().ref(room_name).push({
              name : user_name,
              message : msg,
              like : 0
        })
        document.getElementById("inpute").innerHTML="";
  }
