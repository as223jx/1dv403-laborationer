"use strict";

var Desktop = {
    
    init:function(){
        var pic = document.getElementById("pic");
        
        pic.onclick = function(){
            
            //Skapar popuprutan
            var container = document.getElementById("container");
            var div = document.createElement("div");
            var head = document.createElement("div");
            var thumb = document.createElement("img");
            head.setAttribute("id", "head");
            div.setAttribute("id", "popup");
            div.appendChild(head);
            
            container.appendChild(div);
        };
    },
};

window.onload = Desktop.init;