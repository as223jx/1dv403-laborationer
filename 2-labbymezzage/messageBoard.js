"use strict";

var MessageBoard = {
    
    messages: [],
    
    init:function(e){
        
    var button = document.querySelector("#button");
    button.onclick = MessageBoard.newMess;

    document.getElementById("div1").onkeydown = function(e){
        if(!e){
            e = window.event;
        }
    
        if(e.keyCode === 13 && !e.shiftKey){
            MessageBoard.newMess();
            return false;
        }
    };
},
    
    newMess:function(){
        
    var input = document.querySelector("#textarea").value;   
    var mess = new Message(input, new Date());
    
    MessageBoard.messages.push(mess);
    
    console.log(mess);
        
    MessageBoard.renderMessages();
    
    },
    
 
    renderMessage: function(messageID){
        
        var messageCount = 0;
        
        for(var i = 0; i < MessageBoard.messages.length; i+=1){
            messageCount = i+1;
        } 
        
        var containerDiv = document.getElementById("container");
        
        var divMess = document.getElementById("message");
        
        containerDiv.appendChild(divMess);
        var text = document.createElement("div");
        text.className = "text";
        divMess.appendChild(text);
        var peeTag = document.createElement("p");
        peeTag.className = "peeTag";
        text.appendChild(peeTag);
        
        var newDate = MessageBoard.messages[messageID].getTimeText();
        var date = document.createTextNode(newDate);
        text.appendChild(date);
        peeTag.innerHTML = MessageBoard.messages[messageID].getHTMLtext();
        
        var img = document.createElement("img");
        img.setAttribute("src", "../borty.png");
        text.appendChild(img);
        img.alt="Close";
        img.onclick = function() {
            MessageBoard.removeMessage(messageID);
        };
        
        var imgTwo = document.createElement("img");
        imgTwo.setAttribute("src", "../tid.png");
        text.appendChild(imgTwo);
        imgTwo.alt="Time";
        imgTwo.onclick = function() {
            alert(MessageBoard.messages[messageID].getDateText());
        };
        
        var messageNumber = document.getElementById("messageNumber");
        var messageNumberText = document.createTextNode("Antal meddelanden: " + messageCount);
        
        messageNumber.appendChild(messageNumberText);
    },
    
    renderMessages: function(){
        
        document.getElementById("message").innerHTML = "";
        
        for(var i = 0; i < MessageBoard.messages.length; i+=1){
                document.getElementById("messageNumber").innerHTML = "";
                MessageBoard.renderMessage(i);
        }
    
    },
    
    removeMessage: function(messageID){
        
        if(confirm("Är du säker på att du vill ta bort meddelandet?")){
            MessageBoard.messages.splice(messageID, 1);
            MessageBoard.renderMessages();
        }
    }
    
    
};

    window.onload = MessageBoard.init;
    
    //MessageBoard.messages[1].getText();