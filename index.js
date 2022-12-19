var email="shriram@gmail.com";
var password="fullstacker";
var colour="red";
var fullname="Shriram";

function check(){
var fs = require("fs");
var name=document.getElementById("fullname").value;
var mail=document.getElementById("email").value;
var pass=document.getElementById("password").value;
var color=document.getElementById("ques").value;
fs.writeFile(
    "details.txt",
    name,
    function (err) {
        if (err) {
        return console.error(err);
        }
    });
if(email==mail){
    // document.getElementById("alert").innerHTML="Email already exist";
    window.alert("Email already exist");
    window.location.replace("login.html");
}
else{
    window.location.replace("home.html");
}
}

function checklogin(){
    var mail=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(mail==email&&pass==password){
        window.location.replace("home.html");   
    }
    else{
        window.alert("Login Credentials is wrong");
        window.location.href = "reset.html";
    }
}

function passreset(){
    var color=document.getElementById("ques").value;
    if(color==colour){
        document.getElementById("hide").style.display="block";
        document.getElementById("hidein").style.display="none";
        //  
    }
   else{
    window.alert("Wrong answer");
   }
}

function passcheck(){
    var pas=document.getElementById("password").value;
    var pas1=document.getElementById("password1").value;
    if(pas=pas1){
        window.location.replace("home.html");  
    }
}



