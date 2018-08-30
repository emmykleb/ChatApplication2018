
var usernameinput;

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
    li.appendChild(document.createTextNode(usernameinput + ":" + " " + input));
    ul.appendChild(li);
  //clear chat form  
    document.getElementById("textinput").value = "";
    
    
    //autoscroll to bottom of chat
    chatWindow = document.getElementById('messages'); 
    var xH = chatWindow.scrollHeight; 
    chatWindow.scrollTo(0, xH);
    
    
   
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


  


/*
function postPicture(){
    
     
   
    var picInput = document.getElementById('my_file');
    if(picInput === null){
        
       return null;
    }else if(picInput !== null){
    var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(picInput));
    ul.appendChild(li);
   
    
    
}}
*/

