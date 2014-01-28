"use strict";

var Validator = {
    
    init:function(){
        var button = document.querySelector("#singlebutton");
        
        var allowedName = /^[\ws*$åäöÅÄÖ]/;
        var allowedPostalNumber = /^[0-9]{5}$|^[0-9]{3}-[0-9]{2}$|^[0-9]{3}\s[0-9]{2}$|^SE\d{5}$|^SE\s\d{5}$|^SE\d{3}-\d{2}$|^SE\d{3}\s\d{2}$|^SE\s[0-9]{3}\s[0-9]{2}$|^SE\s[0-9]{3}-\d{2}$/;
        var allowedEmail = /\S+@\S+\.\S+/;
        
        var fornamnInput = document.querySelector("#fornamn");
        var efternamnInput = document.querySelector("#efternamn");
        var postalInput = document.querySelector("#postnummer");
        var emailInput = document.querySelector("#epost");

        fornamnInput.onblur = function(){
        var fornamnValue = document.querySelector("#fornamn").value;
        var p = document.getElementById("fornamnFel");
        if(p.firstChild !== null){
            p.removeChild(p.firstChild);
        }
        
            if(allowedName.test(fornamnValue)){
                fornamnInput.style.background = "transparent";
                fornamnInput.style.borderColor="#66CD00";
                return true;
            }
            else{
                fornamnInput.style.background = "transparent";
                fornamnInput.style.borderColor="#ff3030";
                var text = document.createTextNode("Detta fält får inte lämnas tomt!");
                p.appendChild(text);
                return false;
            }
        };

        efternamnInput.onblur = function(){
            var efternamnValue = document.querySelector("#efternamn").value; 
            var p = document.getElementById("efternamnFel");
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            if(allowedName.test(efternamnValue)){
                efternamnInput.style.background = "transparent";
                efternamnInput.style.borderColor="#66CD00";
                return true;
            }
            else{
                efternamnInput.style.background = "transparent";
                efternamnInput.style.borderColor="#ff3030";
                var text = document.createTextNode("Detta fält får inte lämnas tomt!");
                p.appendChild(text);
                return false;
            }
        };
        
        postalInput.onblur = function(){
            var postalValue = document.querySelector("#postnummer").value;
            var replace = /^([SE]*)\s*(\d{3})[\s\-]*(\d\d)$/;
            
            var p = document.getElementById("postFel");
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }

            if(allowedPostalNumber.test(postalValue)){
                postalInput.style.background = "transparent";
                postalInput.style.borderColor="#66CD00";
                postalValue = postalValue.replace(replace, '$2$3');
                return true;
            }
            else{
                postalInput.style.background = "transparent";
                postalInput.style.borderColor="#ff3030";
                var text = document.createTextNode("Fel inmatning!");
                p.appendChild(text);
                return false;
            }
        };
        
        emailInput.onblur = function(){
            var emailValue = document.querySelector("#epost").value; 
            var p = document.getElementById("emailFel");
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedEmail.test(emailValue)){
                emailInput.style.background = "transparent";
                emailInput.style.borderColor="#66CD00";
                return true;
            }
            else{
                emailInput.style.background = "transparent";
                emailInput.style.borderColor="#ff3030";
                var text = document.createTextNode("Fel inmatning!");
                p.appendChild(text);
                return false;
            }
        };
        
        button.onclick = function(){
            if(fornamnInput.onblur() && efternamnInput.onblur() && postalInput.onblur() && emailInput.onblur()){
                
                var fornamnValue = document.querySelector("#fornamn").value;
                var efternamnValue = document.querySelector("#efternamn").value; 
                var postalValue = document.querySelector("#postnummer").value;
                var emailValue = document.querySelector("#epost").value;
                var dropDown = document.querySelector("#dropDown").value;
                console.log(dropDown);
                // ----- Popuprutan -----
                
                // Yttre DIV:en och knappar
                var div = document.createElement("div");
                div.setAttribute("id", "popUp"); 
                var form = document.getElementById("form");
                form.appendChild(div);
                document.body.appendChild(form);
                var buttonY = document.createElement("button");
                buttonY.appendChild(document.createTextNode("Bekräfta"));
                var buttonN = document.createElement("button");
                buttonN.appendChild(document.createTextNode("Ångra"));
                buttonN.setAttribute("id", "buttonN");
                
                // Skriver ut informationen i popuprutan
                var divfornamn = document.createElement("div");
                var pfornamn = document.createElement("p");
                var divefternamn = document.createElement("div");
                var pefternamn = document.createElement("p");
                var divpost = document.createElement("div");
                var ppost = document.createElement("p");
                var divmail = document.createElement("div");
                var pemail = document.createElement("p");
                var ptitel = document.createTextNode("BEKRÄFTA DITT KÖP:");
                var dropdowndiv = document.createElement("div");
                var pdropdown = document.createElement("p");
                div.appendChild(ptitel);
                pfornamn = document.createTextNode("Förnamn: " + fornamnValue);
                pefternamn = document.createTextNode("Efternamn: " + efternamnValue);
                ppost = document.createTextNode("Postnummer: " + postalValue);
                pemail = document.createTextNode("Email: " + emailValue);
                pdropdown = document.createTextNode("Prismodell: " + dropDown);
                divfornamn.appendChild(pfornamn);
                div.appendChild(divfornamn);
                divefternamn.appendChild(pefternamn);
                div.appendChild(divefternamn);
                divpost.appendChild(ppost);
                div.appendChild(divpost);
                divmail.appendChild(pemail);
                div.appendChild(divmail);
                dropdowndiv.appendChild(pdropdown);
                div.appendChild(dropdowndiv);
                document.body.appendChild(buttonN);
                div.appendChild(buttonY);
                Validator.disable(fornamnInput, efternamnInput, postalInput, emailInput, button);
                
                buttonN.onclick = function(){
                    Validator.enable(fornamnInput, efternamnInput, postalInput, emailInput, button);
                    form.removeChild(div);
                    document.body.removeChild(buttonN);
                };
                
                buttonY.onclick = function(){
                    Validator.enable(fornamnInput, efternamnInput, postalInput, emailInput, button);
                    buttonY.setAttribute("type", "submit");
                };
            }
        };
    },
    
    disable:function(fornamnInput, efternamnInput, postalInput, emailInput, button){
        fornamnInput.setAttribute("disabled", false);
        efternamnInput.setAttribute("disabled", false);
        postalInput.setAttribute("disabled", false);
        emailInput.setAttribute("disabled", false);
        document.getElementById("dropDown").setAttribute("disabled", false);
        button.setAttribute("disabled", false);
    },
    
    enable:function(fornamnInput, efternamnInput, postalInput, emailInput, button){
        fornamnInput.removeAttribute("disabled");
        efternamnInput.removeAttribute("disabled");
        postalInput.removeAttribute("disabled");
        emailInput.removeAttribute("disabled");
        document.getElementById("dropDown").removeAttribute("disabled");
        button.removeAttribute("disabled");
    }
};

window.onload = Validator.init;