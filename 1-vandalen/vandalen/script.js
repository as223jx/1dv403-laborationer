"use strict";

var makePerson = function(persArr){
    
    var names = [];
    var ages = [];
    var ageSum = 0;
    
    for (var i = 0; i < persArr.length; i+=1)
    {
        names.push(persArr[i].name);
        ages.push(persArr[i].age);
        ageSum += ages[i];
    }
    
    names.sort(function(a, b){return a.localeCompare(b)}); 
    ages.sort();
    
    var minAge = ages[0];
    var maxAge = ages[persArr.length - 1];
    var averageAge = Math.round(ageSum/persArr.length);
    
    var result = {
        names: names.join(", "),
        minAge: minAge,
        maxAge: maxAge,
        averageAge: averageAge
    };
    
    return result;
};