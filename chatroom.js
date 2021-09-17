const firebaseConfig = {
    apiKey: "AIzaSyA0fVCTdZPuHG0b48QDcfZiiuF6jK6cnpQ",
    authDomain: "kwitter-bac8f.firebaseapp.com",
    databaseURL: "https://kwitter-bac8f-default-rtdb.firebaseio.com",
    projectId: "kwitter-bac8f",
    storageBucket: "kwitter-bac8f.appspot.com",
    messagingSenderId: "784594156517",
    appId: "1:784594156517:web:25538aaafe4341f1d18d0c"
  };
  

firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("room_name");
User=localStorage.getItem("User")

function broadcast(){
msg=document.getElementById("text").value;

firebase.database().ref(room_name).push({
    name:User,
    Message:msg,
    like:0

});
document.getElementById("text").innerHTML=" ";
}