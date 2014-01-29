"use strict";

var Desktop = {
    
    init:function(){
        var pic = document.getElementById("pic");
        
        pic.onclick = function(){
            var container = document.getElementById("container");
            var div = document.createElement("div");
            div.setAttribute("id", "popup");
            
            container.appendChild(div);
        };
    },
};

window.onload = Desktop.init;