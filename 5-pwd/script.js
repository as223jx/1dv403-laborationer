"use strict";

var Desktop = {
    open : 0,
    // Fixa så thumbnailsen har samma bredd som varandra osv.
    
    init:function(){

        var pic = document.getElementById("pic");
        
	        pic.onclick = function(){
	            //Skapar popuprutan
	            if(Desktop.open == 0){
		            Desktop.open = 1;
		            console.log(Desktop.open);
		            var container = document.getElementById("container");
		            var div = document.createElement("div");
		            div.setAttribute("id", "picDiv");
		            var head = document.createElement("div");
		            var thumb = document.createElement("img");
		            var divText = document.createElement("div");
		            var close = document.createElement("img");
		            var p = document.createTextNode("Image Viewer 1.0");
		            var loader = document.createElement("img");
		            loader.setAttribute("src", "pics/ajax-loader.gif");
		            loader.setAttribute("class", "loader");
		            close.setAttribute("src", "pics/kryss.png");
		            close.setAttribute("id", "close");
		            thumb.setAttribute("src", "pics/Bild.png");
		            thumb.setAttribute("id", "thumb");
		            head.setAttribute("id", "head");
		            div.setAttribute("id", "popup");
		            div.appendChild(head);
		            div.appendChild(loader);
		            head.appendChild(thumb);
		            head.appendChild(p);
		            head.appendChild(close);
		            head.appendChild(divText);
		            container.appendChild(div);
		            
		            Desktop.ajaxCall(loader, div);
		                        
		            close.onclick = function(){
		                container.removeChild(div);
		                Desktop.open = 0;
		            };
	        	};
        	};
    },
            
        ajaxCall:function(loader, div) {
        	var xmlhttp;
        	var bilder = [];
        	if(window.XMLHttpRequest) {
        		xmlhttp = new XMLHttpRequest();
        	}
        	else {
        		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        	}
        	
        	xmlhttp.onreadystatechange = function() {
        		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        			bilder = JSON.parse(xmlhttp.responseText);
        			Desktop.loadImg(bilder, div);
        			loader.style.display = "none";
        			console.log("Glader");
        		}
        	};
        	
        	xmlhttp.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        	xmlhttp.send(null);
        	
        	console.log(bilder);
        	console.log(bilder[0]);
        },
        
        loadImg:function(bilder, div){
        	var height = 0;
        	var width = 0;
        	for (var i = 0; i < bilder.length; i++) {
        		if(height < bilder[i].thumbHeight){
        			height = bilder[i].thumbHeight;
        			console.log(height + "heightht");
        		}
        		if(width < bilder[i].thumbWidth){
        			width = bilder[i].thumbWidth;
        		}
        	};
        	
        	var picContainer = div;
        	console.log("height" + height);
        	for(var i = 0; i < bilder.length; i++) {
        		var cont = document.createElement("div");
        		var aTag = document.createElement("a");
        		aTag.setAttribute("href", "#");
        		var pic = document.createElement("img");
        		pic.setAttribute("class", "thumb");
        		pic.setAttribute("src", bilder[i].thumbURL);
        		pic.setAttribute("width", width);
        		pic.setAttribute("height", height);
        		var url = bilder[i].URL;
        		cont.appendChild(aTag);
        		aTag.appendChild(pic);
        		picContainer.appendChild(cont);
        		Desktop.changeBg(cont, url, aTag);
        	}
        },
        
        changeBg:function(cont, url, aTag){
        	cont.onclick = function(url, aTag){
        		return function() {
        			document.body.style.backgroundImage = "url(" + url + ")";
        		}
        	}(url, aTag);
        },
};

window.onload = Desktop.init;