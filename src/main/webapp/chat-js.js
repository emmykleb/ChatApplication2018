


function addUser(){
    var x = document.getElementById("usernameInput");
     var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    
        var input = document.getElementById('usernameInput').value;
    if(input === null){
        
       return null;
    }else if(input !== null){
    var ul = document.getElementById("users");
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("usernameInput").value = "";}
    
    
    document.getElementById("usernameInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('addUser').click();
    }
    
    
});
    
    
    
}


addAnother = function() {
    
    var x = document.getElementById("textinput");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    
   
  
    var input = document.getElementById('textinput').value;
    if(input === null){
        
       return null;
    }else if(input !== null){
    var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("textinput").value = "";}

};

document.getElementById("textinput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('sendbtn').click();
    }
    
    
});


