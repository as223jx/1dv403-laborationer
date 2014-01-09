"use strict";

var Memory = {
    random: [],
    
    arr: [],
    
    cells: [],
    
    rows: 4,
    cols: 4,
    
    init:function(e){
        var newRandom = new RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
        var i;
        Memory.random.push(newRandom);
        
        for (i = 0; i < newRandom.length; i++){
            // var picture = document.createElement("img");
            // picture.setAttribute("src", "pics/"+newRandom[i]+".png");
            var picture = "pics/"+newRandom[i]+".png";
            Memory.arr.push(picture);
        }
        console.log(Memory.random);
        console.log(Memory.arr[1]);
        console.log(Memory.arr[2]);
        
        Memory.createTable(Memory.rows, Memory.cols);
    },
    
    createTable:function(rows, cols){
        var counter = 0;
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        
        for(var i = 0; i < rows; i+=1){
            var tr = document.createElement("tr");
            
            for(var j = 0; j < cols; j+=1){
                
                
                tr.appendChild(Memory.newTd(counter));
                // var picTwo = document.createElement("img");
                // picTwo.setAttribute("src", Memory.arr[counter]);
                
                console.log("Counter: " + counter);
                
                counter +=1;
            }
            
            tbody.appendChild(tr);
        }
        var memoryDiv = document.getElementById("memoryDiv");
        
        memoryDiv.appendChild(table);
        
    },
    
    newTd:function(counter){
        var varTd = document.createElement("td");
        varTd.setAttribute("id", counter);
        var pic = document.createElement("img");
        pic.setAttribute("src", "pics/0.png");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        varTd.appendChild(a);
        a.appendChild(pic);
        
        a.onclick = function(){
            pic.setAttribute("src", "pics/" + counter + ".png");
        };
        
        return varTd;
    }
};

window.onload = Memory.init;