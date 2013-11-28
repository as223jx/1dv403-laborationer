"use strict";

window.onload = function(){

	
	var birthday = function(date){
	    
	// Sätter en fast tid för att undvika problem med om klockan är före eller
	// efter 12.
    var userDate = new Date(date+"T23:59:59");
    var nowDate = new Date();
    
    // Sätter året till dagens år.
    userDate.setFullYear(nowDate.getFullYear());
    
    // Om användaren redan fyllt år detta år sätter jag året till nästa år för
    // att undvika negativa resultat.
    if(userDate.getTime() < nowDate.getTime()){
        userDate.setFullYear(nowDate.getFullYear() + 1);
    }
    
    var milPerDay = 86400000;
    
    // Räknar ut skillnaden i millisekunder på användarens födelsedag och dagens
    // datum och delar med millisekunder per dagar för att få ut antalet dagar.
    var result = Math.floor((userDate.getTime() - nowDate.getTime()) / milPerDay);
    
    return result;
    
	};
	
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};