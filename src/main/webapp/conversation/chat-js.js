

//var usernameinput = document.getElementById("users").value;

  var pic = document.getElementById("my_file");
  var img = new Image();
  img.src = "my_file";
  img.width = 50;
  img.type = "jpg";
    

function postPicture(){
    
    
    
    
   
    var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
    li.appendChild(img);
    ul.appendChild(li);
    
    
    
     
  /* 
    var picInput = document.getElementById('get_file').createElement("IMG");
    console.log(picInput);
    var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(picInput));
    ul.appendChild(li);
   
    
    */
}





function sendMessage() {

   
    
    
    
    
    
  /*
    var x = document.getElementById("textinput");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
 */
//Get chat form input, append to list object and print
    var input = document.getElementById('textinput').value;
    var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
    var img = new Image();
    img.src = "avatar.png";
    img.width = 20;
    li.appendChild(img);
    li.appendChild(document.createTextNode(" Eivind: " + input));
    ul.appendChild(li);
    
  //clear chat form  
    document.getElementById("textinput").value = "";
    
    
    
    
    
    //autoscroll to bottom of chat
    chatWindow = document.getElementById('messages'); 
    var xH = chatWindow.scrollHeight; 
    chatWindow.scrollTo(0, xH);
    
    
    //load avatar pic

  
 

return true;
    
    
   
};
//Pressing enter to post
  document.getElementById("textinput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('sendbtn').click();
    }
});   

   
document.getElementById('get_file').onclick = function() {
    document.getElementById('my_file').click();
};


  

