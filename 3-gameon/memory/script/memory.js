"use strict";

var Memory = {
    random: [],
    
    rows: 4,
    cols: 4,
    
    init:function(e){
        var newRandom = new RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
        Memory.random.push(newRandom);
        
        
        console.log(Memory.random);
        console.log(Memory.random.length);
        
        Memory.createTable(Memory.rows, Memory.cols);
    },
    
    createTable:function(rows, cols){
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        
        for(var i = 0; i < rows; i+=1){
            var tr = document.createElement("tr");
            for(var j = 0; j < cols; j+=1){
                var td = document.createElement("td");
                var pic = document.createElement("img");
                pic.setAttribute("src", "pics/0.png");
                td.appendChild(pic);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        var memoryDiv = document.getElementById("memoryDiv");
        
        
        memoryDiv.appendChild(table);
        console.log(table);
    }
};

window.onload = Memory.init;