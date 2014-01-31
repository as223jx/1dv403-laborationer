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
            var divText = document.createElement("div");
            var close = document.createElement("img");
            var p = document.createTextNode("Image Viewer 1.0");
            close.setAttribute("src", "pics/kryss.png");
            close.setAttribute("id", "close");
            thumb.setAttribute("src", "pics/Bild.png");
            thumb.setAttribute("id", "thumb");
            head.setAttribute("id", "head");
            div.setAttribute("id", "popup");
            div.appendChild(head);
            head.appendChild(thumb);
            head.appendChild(p);
            head.appendChild(close);
            head.appendChild(divText);

            container.appendChild(div);
            
            close.onclick = function(){
                container.removeChild(div);
            };
        };
    },
};

window.onload = Desktop.init;