var firebaseConfig = {
    apiKey: "AIzaSyBEXAegngIu8SJYDH6r_CbYXl6j9t3nPU8",
    authDomain: "chatup-ee474.firebaseapp.com",
    databaseURL: "https://chatup-ee474-default-rtdb.firebaseio.com",
    projectId: "chatup-ee474",
    storageBucket: "chatup-ee474.appspot.com",
    messagingSenderId: "68720949320",
    appId: "1:68720949320:web:9365047ddc13163559007d"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function createChat(){
    chat_name = document.getElementById("chat_name").value;
    firebase.database().ref("/").child(chat_name).update({
        purpose: "adding chat name"
    });
    localStorage.setItem("chat_name", chat_name);
    window.location = "H96.html";
}
function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
    Chat_names = childKey;
    console.log("Chat Name - " + Chat_names);
    row = "<div class = 'chat_name' id = " + Chat_names + " onclick = 'redirectToChatName(this.id)'>" + Chat_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToChatName(name){
    console.log(name);
    localStorage.setItem("chat_name", name);
    window.location = "H96.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("chat_name");
    window.location = "H94a.html";
}