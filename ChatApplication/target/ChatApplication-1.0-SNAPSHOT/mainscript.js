




class User {
    constructor(uid) {
      this.userid = uid;
      User = new User('nils', 'Nils');
      var ul = document.getElementById("users");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(uid));
      ul.appendChild(li);
      
    }
}

uid = new User('user1');



function addUser(){
   
 /*
    var x = document.getElementById("usernameInput");
     var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    */
  
   
   var idImg = new Image();
    idImg.src = "idavatar.png";
    idImg.width = 20;
   
        
    uid = document.getElementById('usernameInput').value;
    if(uid ===""){
        return false;
      
    }else if(uid !== ""){
    var ul = document.getElementById("contactList");
    var li = document.createElement("li");
    
    li.appendChild(idImg);
    li.appendChild(document.createTextNode(uid));
    ul.appendChild(li);
    document.getElementById("usernameInput").value = "";

var x = document.getElementsByTagName("LI");
var setClass = "";
 var i;
   for(i = 0; i< x.length; i++ )
 setClass += document.getElementsByTagName("LI")[i].setAttribute("class", "user-li");

var y = document.getElementsByTagName("LI");
var addFunction = "";
 var j;
   for(j = 0; j< y.length; j++ )
 addFunction += document.getElementsByTagName("LI")[j].setAttribute("onclick", "goToNewConvPage()");
return true;
} 
    
    
    };

     document.getElementById("usernameInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('addUser').click();
    }
});   


function goToNewConvPage(){
    
    window.location.href = "conversation/conversations.html";
}

